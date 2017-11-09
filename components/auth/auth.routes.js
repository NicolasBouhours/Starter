const express = require('express');

const router = express.Router();

/**
 * Post
 */
router.post('/signup', (req, res) => {
  res.send('Post signup');
});

router.post('/signin', (req, res) => {
  res.send('Post signin');
});

module.exports = router;
