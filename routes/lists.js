const router = require('express').Router()
let List = require('../models/lists.model')

router.route('/').get((req, res) => {
  List.find()
    .then(list => res.json(list))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const category = req.body.category
  const list = req.body.list
  const categoryTitle = req.body.categoryTitle

  const newList = new List({
    categoryTitle: categoryTitle,
    category: category,
    list: list
  })

  newList.save()
    .then(() => res.json('List added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  List.findOne({category: req.params.id})
    .then(list => res.json(list))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  List.findOneAndDelete({category: req.params.id})
    .then(() => res.json('List deleted'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  List.findById(req.params.id)
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