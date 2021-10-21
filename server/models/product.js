const mongoose = require('mongoose')
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema

const productSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 2000
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000
  },
  price: {
    type: Number,
    trim: true,
    required: true,
    maxlength: 32
  },
  category: {
    type: ObjectId,
    ref: 'Category',
    required: true,
  },
  quantity: {
    type: Number,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  shipping: {
    required: false,
    type: Boolean,
  }
}, { timestamps: true })

const Product = mongoose.model("Product", productSchema)

module.exports = { Product }