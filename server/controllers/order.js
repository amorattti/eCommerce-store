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
      .sort('-createdAt')
      .exec((error, orders) => {
         if (error) {
            return res.status(400).json({
               error: errorHandler(error)
            })
         }
         res.json(orders)
      })
}

exports.getStatusOrders = (req, res) => {
   res.json(Order.schema.path('status').enumValues)
}

exports.updateStatus = async (req, res) => {
   try {
      const filter = { _id: req.body._id }
      const update = { status: req.body.status }

      let doc = await Order.findOneAndUpdate(filter, update)
      res.json({message: "Document has been updated successfully"})
  
   } catch (error) {
      return res.status(400).json({
         error: errorHandler(error)
      })
   }
}