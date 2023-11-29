const express = require('express');
const router = express.Router();

const {getAllUser,createUser} = require('../Controllers/User')


router.get('/getAll', getAllUser )

router.post('/create', createUser)

module.exports = router;