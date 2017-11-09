const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

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

module.exports = app;