const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CategorySchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  sharedWith: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  categoryArray: [
    {
      title: String,
    },
  ],
}, {
  timestamps: true,
}) 

const Category = mongoose.model('category', CategorySchema)

module.exports = Category