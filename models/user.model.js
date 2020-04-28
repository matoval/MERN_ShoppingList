const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  displayName: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
  },
  hashPW: {
    type: String,
    required: true,
  },
  tokenVersion: {
    type: Number,
    required: true,
    default: 0,
  }
}, {
  timestamps: true,
})

const User = mongoose.model('user', UserSchema)

module.exports = User