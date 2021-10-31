const express = require('express')
const router = express.Router()

const { create, read, list, update, remove, categoryById } = require('../controllers/category')
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth")
const { userById } = require('../controllers/user')

router.param('userId', userById) // set req.profile = user  by id
router.param('categoryId', categoryById) // set req.category = category  by id

router.get('/category/:categoryId', read)
router.get('/categories', list)

router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create)
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove)
router.patch('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update)


module.exports = router

/** middlewares ---
 *  requireSignin return The decoded JWT payload with user = req.auth *
 *  then isAuth check id if are the same and on the end isAdmin check did role is admin
 */