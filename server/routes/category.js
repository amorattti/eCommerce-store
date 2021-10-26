const express = require('express')
const router = express.Router()

const { create, read, categoryById } = require('../controllers/category')
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth")
const { userById } = require('../controllers/user')

router.param('userId', userById) // set req.profile = user  by id
router.param('categoryId', categoryById) // set req.category = category  by id

router.get('/category/:categoryId', read)
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create)

module.exports = router