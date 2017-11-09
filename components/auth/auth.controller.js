/**
 * Handle user sign in action
 */
function signin(req, res) {
  return res.send('Post signIn');
}

/**
 * Handle user sign in action
 */
function signup(req, res) {
  return res.send('Post signUp');
}

module.exports = {
  signin,
  signup,
};
