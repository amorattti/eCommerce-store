const express = require('express')
const router = express.Router()

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')

const { userById } = require('../controllers/user')

router.param('userId', userById) // set req.profile = user

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile
  })
})

module.exports = router