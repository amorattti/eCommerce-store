const express = require('express')
const { sayHello } = require('../controllers/users')
const router = express.Router()

router.get('/', sayHello)

module.exports = router