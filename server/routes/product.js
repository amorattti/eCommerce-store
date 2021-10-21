const express = require('express')
const router = express.Router()

const { create } = require('../controllers/product')
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth")
const { userById } = require('../controllers/user')

router.param('userId', userById) // set req.profile = user

router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create)

module.exports = router