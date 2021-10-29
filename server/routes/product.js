const express = require('express')
const router = express.Router()

const { create, productById, read, remove, update } = require('../controllers/product')
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth")
const { userById } = require('../controllers/user')

router.param('userId', userById) // set req.profile = user  by id
router.param('productId', productById) // set req.product = product  by id
/**--product--*/
router.get('/product/read/:productId', read)
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create)
router.delete('/product/:productId/:userId', requireSignin, isAuth, isAdmin, remove)
router.patch('/product/:productId/:userId', requireSignin, isAuth, isAdmin, update)
/**--products--*/
router.get('/products', list)

module.exports = router