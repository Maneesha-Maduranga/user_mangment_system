const express = require('express');
const router = express.Router();

const {registerUser,loginUser} = require('../Controllers/Auth')

router.post('/login', loginUser)

router.post('/register', registerUser)

module.exports = router;