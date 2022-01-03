const express = require('express')
const { requireSignin, isAuth } = require('../controllers/auth')
const { generateToken } = require('../controllers/braintree')
const { userById } = require('../controllers/user')
const router = express.Router()

router.param('userId', userById)


router.get('/braintree/getToken/:userId', requireSignin, isAuth, generateToken)



module.exports = router