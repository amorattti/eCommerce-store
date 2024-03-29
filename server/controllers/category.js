const { Category } = require("../models/category")
const { errorHandler } = require("../helpers/dbErrorHandler")

/**** param ****/
exports.categoryById = async (req, res, next, id) => {
  try {
    const category = await Category.findById(id).exec()
    req.category = category
    next()

  } catch (error) {
    return res.status(400).json({
      error: `Category not found`
    })
  }
}

/**** endpoints ****/
exports.create = (req, res) => {
  const category = new Category(req.body)
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({ data })
  })
}

exports.read = (req, res) => {
  return res.json(req.category)
}

exports.list = async (req, res) => {
  try {
    const categories = await Category.find({})
    return res.json(categories)

  } catch (error) {
    return res.status(400).json({
      error: errorHandler(error)
    })
  }
}

exports.update = async (req, res) => {
  try {
    const category = req.category
    category.name = req.body.name
    await category.save()
    res.json(category)

  } catch (error) {
    return res.status(400).json({
      error: errorHandler(error)
    })
  }
}

exports.remove = async (req, res) => {
  try {
    const category = req.category
    await category.remove()
    res.json({ message: 'Category has been deleted successfully' })
    
  } catch (error) {
    return res.status(400).json({
      error: errorHandler(error)
    })
  }
}

