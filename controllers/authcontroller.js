const signup = require('./auth/signupController');
const login = require('./auth/loginController');
const logout = require('./auth/logoutController');
const refreshToken = require('./auth/refreshTokenController');

module.exports = {
  signup,
  login,
  logout,
  refreshToken,
};