const jwt = require("jsonwebtoken")
const expressJwt = require('express-jwt')
const { errorHandler } = require("../helpers/dbErrorHandler")
const { User } = require("../models/user")

exports.signup = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()

    user.hashed_password = undefined
    user.salt = undefined

    res.status(201).send(user)

  } catch (error) {
    res.status(400).json({ error: errorHandler(error) })
  }
}

exports.signin = (req, res) => {
  try {
    const { email, password } = req.body
    const user = User.findOne({ email }, (err, user) => {
      /*- check email */
      if (err || !user) {
        return res.status(400).json({
          error: 'User with such e-mail does not exist.'
        })
      }
      /*- check passwords */
      if (!user.authentication(password)) {
        return res.status(401).json({ error: "Email and password are wrong " })
      }
      /*- create token and send to cookies*/
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
      res.cookie('x-access-token', token, { expire: 999999 + Date.now() })

      const { _id, email, name, role } = user
      res.status(201).json({ token, user: { _id, email, name, role } })
    })
  } catch (error) {
    res.status(400).json({ error: errorHandler(error) })
  }
}

exports.signout = (req, res) => {
  res.clearCookie("x-access-token")
  res.json({ message: 'Sign out was successful.' })
}

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  userProperty: 'auth'
})
