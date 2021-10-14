const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { v1: uuidv1 } = require('uuid');

const { Schema } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  hashed_password: {
    type: String,
   // required: true
  },
  about: {
    type: String,
    trim: true
  },
  salt: String,
  role: {
    type: Number,
    default: 0
  },
  history: {
    type: Array,
    default: []
  }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
module.exports = { User }