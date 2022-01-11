const { User } = require("../models/user")

/**** param ****/
exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found"
      })
    }
    req.profile = user
    next()
  })
}

/**** endpoints ****/

exports.read = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  res.json(req.profile)
}

exports.update = async (req, res) => {
  req.body.role = 0; // role will always be 0
  User.findOneAndUpdate({ _id: req.profile._id }, { $set: req.body }, { new: true }, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: 'You are not authorized to perform this action'
      });
    }
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  });
}


exports.addOrderHistoryToUser = async (req, res, next) => {
  try {
    const history = []
    // products from localstorage
    req.body.order.products.forEach((product) => {
      let newProductFormat = {
        name: product.name,
        price: product.price,
        category: product.category,
        quantity: product.quantity,
        amount: product.count,
        transaction_id: req.body.order.transaction_id
      }
      history.push(newProductFormat)
    })

    await User.findOneAndUpdate(
      { _id: req.profile._id },
      { $push: { history } },
      { new: true }
    ).exec()

    next()

  } catch (error) {
    return res.json(400).json({
      error: 'Could not update user purchase history'
    })
  }
}