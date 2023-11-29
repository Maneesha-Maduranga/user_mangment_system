const jwt = require('jsonwebtoken');

const createToken = ({ payload }) => {
    console.log(payload)
  let token = jwt.sign(payload, process.env.JWT_SECREAT, {
    expiresIn: '10d',
  });
  return token;
};

const verifyToken = (token) => {
  let valid = jwt.verify(token, process.env.JWT_SECREAT);
  return valid;
};

module.exports = {
  createToken,
  verifyToken,
};