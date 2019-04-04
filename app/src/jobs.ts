import crypto from'crypto';
import { Request, Response, Router } from "express";


import createJob from './createJob';
import { init as redisClient } from './redisClient';

const router = Router();

router.get('/:company/:tag', (req: Request, res: Response) => {
  const { company, tag } = req.params;
  const redisInstance = redisClient();
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

export default router;
