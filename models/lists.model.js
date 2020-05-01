const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ListSchema = new Schema({
  categoryTitle: String,
  category:
  {
      type: Schema.Types.ObjectId,
      ref: 'Category'
  },
  list: [
    {
      title: String,
      isChecked: Boolean,
    }
  ]
}, {
  timestamps: true,
})
  

const List = mongoose.model('list', ListSchema)

module.exports = List