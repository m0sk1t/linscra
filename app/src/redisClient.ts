import chalk from 'chalk';
import { createClient, ClientOpts, RedisClient } from 'redis';

const {
  REDIS_DB_HOST,
  REDIS_DB_PORT
} = process.env;

let _db: RedisClient;

export const init = (): RedisClient => {
  if (_db) return _db;
  _db = createClient({
    host: REDIS_DB_HOST,
    port: REDIS_DB_PORT,
  } as ClientOpts);
  _db.on('error', (err) => {
    console.log(chalk.red('✗'), `redis connection error: ${err.message}`);
  });
  return _db;
};
