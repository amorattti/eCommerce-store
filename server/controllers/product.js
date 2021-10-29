
const formidable = require('formidable');
const _ = require("lodash")
const { Product } = require("../models/product")
const { errorHandler } = require("../helpers/dbErrorHandler")

const fs = require('fs')

/**** param ****/
exports.productById = async (req, res, next, id) => {
  try {
    const product = await Product.findById(id).populate('category').exec();
    req.product = product
    next()
  } catch (error) {
    return res.status(400).json({
      error: "Product does not exist"
    })
  }
}

/**** endpoints ****/
exports.read = (req, res) => {
  req.product.photo = undefined
  return res.json(req.product)
}

exports.create = (req, res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Image could not be uploaded'
      })
    }

    const { name, description, price, category, quantity, shipping } = fields

    if (!name || !description || !price || !category || !quantity || !shipping) {
      return res.status(400).json({
        error: "All fields are required"
      })
    }

    let product = new Product(fields)

    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size"
        })
      }
      product.photo.data = fs.readFileSync(files.photo.path)
      product.photo.contentType = files.photo.type
    }

    product.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      }
      res.json(result)
    })

  })
}

exports.remove = async (req, res) => {
  try {
    const product = req.product
    await product.remove()
    res.json({ message: 'Product has been deleted successfully' })

  } catch (error) {
    return res.status(400).json({
      error: errorHandler(error)
    })
  }
}

exports.update = (req, res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Image could not be uploaded'
      })
    }

    const { name, description, price, category, quantity, shipping } = fields

    if (!name || !description || !price || !category || !quantity || !shipping) {
      return res.status(400).json({
        error: "All fields are required"
      })
    }
    /**  update by lodash _.assignIn method short name _extend **/
    let product = req.product
    product = _.extend(product, fields)
    //  _.assignIn({ 'a': 0 }, new Foo, new Bar);
    //  => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }

    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size"
        })
      }
      product.photo.data = fs.readFileSync(files.photo.path)
      product.photo.contentType = files.photo.type
    }

    product.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      }
      res.json(result)
    })

  })
}

/** :::
 * sell / arrival
 * by sell =/products?soryBy=sold&order=desc&limit=4
 * by arrival =/products?soryBy=createdAt&order=desc&limit=4
 * if no params are sent, then all product are returned
 */

exports.list = async (req, res) => {
  try {
    let order = req.query.order ? req.query.order : 'asc'
    let soryBy = req.query.soryBy ? req.query.soryBy : '_id'
    let limit = req.query.limit ? req.query.limit : 6

    let products = await Product.find()
      .select('-photo')
      .populate('category')
      .sort([[soryBy, order]])
      .limit(limit)
      .exec()

    res.json(products)

  } catch (error) {
    return res.status(400).json({
      error: `Product not found`
    })
  }
}