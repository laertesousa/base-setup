const mongoose = require('mongoose');

const env = process.env.NODE_ENV;
const dbUrl = process.env.DB_URL;
const user = process.env.DB_USER;
const pass = process.env.DB_PASSWORD;

module.exports = () => {
  let options = {
    useNewUrlParser: true
  };

  if(env === 'production') {
    options.user = user;
    options.pass = pass;
  }
  const db = mongoose.connect(dbUrl, options);

  require('./users');

  return db;
};
