const crypto = require('crypto');

const hashPassword = (password) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

const verifyAuth = (inputPassword, storedHash) => {
  const inputHash = hashPassword(inputPassword);
  return inputHash === storedHash;
};

module.exports = { hashPassword, verifyAuth };