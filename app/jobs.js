const crypto = require('crypto');
const router = require('express').Router();

const redisClient = require('./redisClient');
const createJob = require('./createJob');

router.get('/:company/:tag', (req, res) => {
  const { company, tag } = req.params;
  const redisInstance = redisClient.getConn();
  try {
    const hash = crypto.createHmac('sha256', 'tsss.. secret').update(company + tag).digest('hex');
    redisInstance.get(hash, (err, key) => {
      if (err) return res.status(500).send(`Error while creating job: ${err.message}`);
      !key && redisInstance.set(hash, 'running');
      !key && createJob().then((status) => {
        console.log(status);
        redisInstance.set(hash, 'done!');
      });
      return res.send(`Job status: ${key ? key : 'created'}`);
    });
  } catch (err) {
    return res.status(500).send(`Error while creating job: ${err.message}`);
  }
});

module.exports = router;
