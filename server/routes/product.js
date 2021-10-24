const express = require('express')
const router = express.Router()

const { create, productById, read } = require('../controllers/product')
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth")
const { userById } = require('../controllers/user')

router.param('userId', userById) // set req.profile = user
router.param('productId', productById) // set req.product = product

router.get('/product/read/:productId', read)
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create)

module.exports = router