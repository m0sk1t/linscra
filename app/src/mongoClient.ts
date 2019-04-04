import chalk from 'chalk';
import { connect } from 'mongoose';

const {
  MONGO_DB_BASE,
  MONGO_DB_HOST,
  MONGO_DB_PORT,
} = process.env;

export const init = () => {
  try {
    connect(`mongodb://${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_BASE}`);
    console.log(chalk.green('✓'), `connected to ${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_BASE}`);
  } catch (error) {
    console.log(chalk.red('✗'), `mongo connection error: ${error.message}`);
  }
};
