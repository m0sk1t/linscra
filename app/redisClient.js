const chalk = require('chalk');
const redis = require('redis');

const {
  REDIS_DB_HOST,
  REDIS_DB_PORT
} = process.env;

let _db = null;

const init = () => {
  if (_db) return _db;
  _db = redis.createClient({
    host: REDIS_DB_HOST,
    port: REDIS_DB_PORT,
  });
  _db.on('error', (err) => {
    console.log(chalk.red('✗'), `redis connection error: ${err.message}`);
    _db = null;
  });
  return _db;
}

const getConn = () => _db;

module.exports = {
  init,
  getConn,
};
