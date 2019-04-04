import chalk from "chalk";
import express from "express";

import jobRouter from './jobs';

import { init as mongoInit } from './mongoClient';
import { init as redisInit } from './redisClient';


const app: express.Application = express();

const {
  NODE_PORT,
} = process.env;

app.use('/job', jobRouter);

app.listen(NODE_PORT, () => {
  mongoInit();
  redisInit();
  console.log(chalk.green('✓'), 'server started');
});
