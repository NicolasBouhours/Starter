const express = require('express');

const userController = require('./user.controller');

const router = express.Router();

/**
 * Get
 */
router.get('/', userController.list());

module.exports = router;
