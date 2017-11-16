const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

const db = require('./database');

const authRoutes = require('./components/auth/auth.routes');
const userRoutes = require('./components/user/user.routes');

/**
 * Connect to database
 */
(async () => {
  try {
    await db.sequelize.authenticate();
  } catch(err) {
    console.log('Cannot connect to database');
  }
})();

/**
 * Express options
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/**
  * Routes
  */
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

module.exports = app;
