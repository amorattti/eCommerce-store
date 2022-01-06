const { User } = require("../models/user")
const braintree = require('braintree')
require('dotenv').config()

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MARCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY
});

exports.generateToken = (req, res) => {
  gateway.clientToken.generate({}, function (err, response) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(response)
    }
  })
}

exports.processPayment = (req, res) => {
  const paymentMethodNonce = req.body.paymentMethodNonce
  const amount = req.body.amount

  gateway.transaction.sale(
    {
      amount: amount,
      paymentMethodNonce: paymentMethodNonce,
      options: {
        submitForSettlement: true
      }
    },
    (error, result) => {
      if (error) {
        res.status(500).json(error)
      } else {
        res.json(result)
      }
    }
  )
}