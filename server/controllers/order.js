const { Order, CartItem } = require('../models/order')
const { errorHandler } = require('../helpers/dbErrorHandler')

exports.createOrder = (req, res) => {
   req.body.order.user = req.profile

   const order = new Order(req.body.order)
   order.save((error, data) => {
      if (error) {
         return res.status(400).json({
            error: errorHandler(error)
         })
      }
      res.json(data)
   })
}

// Admin Orders
exports.listOrdersAdmin = (req, res) => {
   Order.find({})
      .populate('user', "_id name address")
      .sort('-created')
      .exec((error, orders) => {
         if (error) {
            return res.status(400).json({
               error: errorHandler(error)
            })
         }
         res.json(orders)
      })
}