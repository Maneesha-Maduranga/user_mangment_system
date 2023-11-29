const express = require('express');
const router = express.Router();

const {getAllUser,createUser} = require('../Controllers/User')

//Import middleware
const {authentication} = require('../Middleware/Security');


router.get('/getAll', authentication , getAllUser )

router.post('/create', createUser)

module.exports = router;