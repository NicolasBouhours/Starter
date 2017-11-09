const express = require('express');

const authController = require('./auth.controller');

const router = express.Router();

/**
 * Post
 */
router.post('/signup', authController.signup);

router.post('/signin', authController.signin);

module.exports = router;
