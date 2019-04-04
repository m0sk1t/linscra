const chalk = require('chalk');
const mongoose = require('mongoose');

const {
  MONGO_DB_BASE,
  MONGO_DB_HOST,
  MONGO_DB_PORT,
} = process.env;

let _db = null;

const init = () => {
  if (_db) return _db;
  mongoose.connect(`mongodb://${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_BASE}`, (err, db) => {
    if (err) {
      console.log(chalk.red('✗'), `mongo connection error: ${err.message}`);
    } else {
      _db = db;
      console.log(chalk.green('✓'), `connected to ${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_BASE}`);
    }
  });
};

const getConn = () => _db;

module.exports = {
  init,
  getConn,
};
