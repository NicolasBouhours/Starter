const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

const authRoutes = require('./components/auth/auth.routes');
const userRoutes = require('./components/user/user.routes');

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
