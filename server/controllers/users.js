const { errorHandler } = require("../helpers/dbErrorHandler");
const { User } = require("../models/user");

exports.signup = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    
    user.hashed_password = undefined
    user.salt = undefined
    
    res.status(201).send(user)
    
  } catch (error) {
    res.status(400).json({ error: errorHandler(error) })
  }
}