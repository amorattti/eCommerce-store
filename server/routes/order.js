const { Router } = require('express')
const { createOrder } = require('../controllers/order')
const { addOrderHistoryToUser } = require('../controllers/user')
const { requireSignin, isAuth } = require('../controllers/auth')
const { userById } = require('../controllers/user')
const router = Router()

router.param('userId', userById)  // set req.profile = user  by id

router.post('/order/create/:userId', requireSignin, isAuth, addOrderHistoryToUser, createOrder)

module.exports = router