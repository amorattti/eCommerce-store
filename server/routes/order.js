const { Router } = require('express')
const { createOrder, listOrdersAdmin, getStatusOrders } = require('../controllers/order')
const { addOrderHistoryToUser } = require('../controllers/user')
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')
const { decreaseQuantity } = require('../controllers/product')
const { userById } = require('../controllers/user')
const router = Router()

router.param('userId', userById)  // set req.profile = user  by id

router.post('/order/create/:userId',
  requireSignin,
  isAuth,
  addOrderHistoryToUser,
  decreaseQuantity,
  createOrder
)

router.get('/order/list/:userId', requireSignin, isAuth, isAdmin, listOrdersAdmin)
router.get('/order/status-values/:userId', requireSignin, isAuth, isAdmin, getStatusOrders)

module.exports = router