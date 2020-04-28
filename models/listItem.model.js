const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ListItemSchema = new Schema({
  listItem: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
      },
      category: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Category'
        },
      ],
      title: String,
      isChecked: Boolean,
    },
  ],
}, {
  timestamps: true,
})
  

const ListItem = mongoose.model('listItem', ListItemSchema)

module.exports = ListItem