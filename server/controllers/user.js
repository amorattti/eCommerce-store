const { User } = require("../models/user")

/**** param ****/
exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if(err || !user) {
      return res.status(400).json({
        error: "User not found"
      })
    }
    req.profile = user
    next()
  })
}
