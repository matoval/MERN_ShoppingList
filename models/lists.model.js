const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ListSchema = new Schema({
  categoryTitle: String,
  creator:
  {
      type: Schema.Types.ObjectId,
      ref: 'user'
  },
  sharedWith: [
    {
      sharedUser: 
      {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    },
  ],
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