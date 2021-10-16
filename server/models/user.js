const mongoose = require('mongoose')
const crypto = require('crypto') // password-hashing nodejs 
const { v1: uuidv1 } = require('uuid')

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
    required: true
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

userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password
    this.salt = uuidv1()
    this.hashed_password = this.encryptPassword(password)
  })

userSchema.methods = {
  encryptPassword: function (password) {
    if (!password) return ''
    try {
      return crypto
        .createHash('sha1', this.salt)
        .update(password)
        .digest("hex");
    } catch (error) {
      return '';
    }
  }
}

const User = mongoose.model('User', userSchema)
module.exports = { User }