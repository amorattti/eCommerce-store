
const formidable = require('formidable');
const _ = require("lodash")
const { Product } = require("../models/product")
const { errorHandler } = require("../helpers/dbErrorHandler")

const fs = require('fs');

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

exports.list = async (req, res) => {
  // by sell = /products?soryBy=sold&order=desc&limit=4
  // by arrival = /products?soryBy=createdAt&order=desc&limit=4
  try {
    let order = req.query.order ? req.query.order : 'asc'
    let soryBy = req.query.soryBy ? req.query.soryBy : '_id'
    let limit = req.query.limit ? parseInt(req.query.limit) : 4

    let products = await Product.find()
      .select('-photo') // return without photo
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

exports.relatedList = async (req, res) => {
  try {
    let limit = req.query.limit ? parseInt(req.query.limit) : 4

    const relatedListOfProducts = await Product.find({
      _id: { $ne: req.product },
      category: req.product.category
    })
      .populate('category', '_id name')
      .limit(limit)
      .exec()

    res.json(relatedListOfProducts)

  } catch (error) {
    return res.status(400).json({
      error: "Products not found"
    })
  }
}
// list all categories in Product collection
exports.listCategories = async (req, res) => {
  try {
    const categories = await Product.distinct('category', {})
    // ["617ee00728533daa63292924","617ee00e28533daa63292927"]
    res.json(categories)

  } catch (error) {
    return res.status(400).json({
      error: "List of Categories not found"
    })
  }
}


exports.listBySearch = async (req, res) => {
  try {
    let order = req.body.order ? req.body.order : 'desc'
    let sortBy = req.body.sortBy ? req.body.sortBy : '_id'
    let limit = req.body.limit ? parseInt(req.body.limit) : 100
    let skip = parseInt(req.body.skip)
    let findArgs = {}

    console.log(findArgs)

    for (let key in req.body.filters) {
      if (req.body.filters[key].length > 0) {
        if (key === 'price') {
          // gte -  greater than price [0-10]
          // lte - less than
          findArgs[key] = {
            $gte: req.body.filters[key][0],
            $lte: req.body.filters[key][1]
          };
        } else {
          findArgs[key] = req.body.filters[key];
        }
      }
    }

    const data = await Product.find(findArgs)
      .select('-photo')
      .populate('category')
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec()

    return res.json({
      size: data.length,
      data
    });

  } catch (error) {
    return res.status(400).json({
      error: 'Products not found'
    });
  }
}

exports.photo = (req, res, next) => {
  if (req.product.photo.data) {
    res.set('Content-Type', req.product.photo.contentType)
    return res.send(req.product.photo.data)
  }
  next()
}