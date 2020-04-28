const router = require('express').Router()
let ListItem = require('../models/listItem.model')

router.route('/').get((req, res) => {
  ListItem.find()
    .then(listItem => res.json(listItem))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const user = req.body.user
  const category = req.body.category
  const title = req.body.title
  const isChecked = req.body.isChecked

  const newListItem = new ListItem({
    images: [
      {
        user: user,
        category: category,
        title: title,
        isChecked: isChecked,
      },
    ]
  })

  newListItem.save()
    .then(() => res.json('List item added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  ListItem.findById(req.params.id)
    .then(listItem => res.json(listItem))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  ListItem.findByIdAndDelete(req.params.id)
    .then(() => res.json('List item deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  ListItem.findById(req.params.id)
    .then(listItem => {
      listItem.user = req.body.user
      listItem.category = req.body.category
      listItem.title = req.body.title
      listItem.isChecked = req.body.isChecked

      listItem.save()
        .then(() => res.json('List item updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router