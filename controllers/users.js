const { User } = require("../models/user");

exports.sayHello = async (req, res) => {
  const doc = new User({
    name: 'tobiasz2',
    email: 'tobi2@wp.pl'
  });
  await doc.save(); // Throws "document must have an _id before saving"
  res.send('test controller')
}