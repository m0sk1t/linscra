const app = require('express')();
const chalk = require('chalk');
const mongoClient = require('./mongoClient');
const redisClient = require('./redisClient');

const jobRouter = require('./jobs');

const {
  NODE_PORT,
} = process.env;

app.use('/job', jobRouter);

app.listen(NODE_PORT, () => {
  mongoClient.init();
  redisClient.init();
  console.log(chalk.green('✓'), 'server started');
});
