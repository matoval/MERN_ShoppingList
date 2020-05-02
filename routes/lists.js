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
    .then(() => res.json('List deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/delete/:id').post((req, res) => {
  List.findOneAndUpdate({category: req.body.category}, {$pull: {list: {_id: req.params.id}}}, {new: true})
    .then(cat=> res.json(cat))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  const newListItem = {title: req.body.title, isChecked: false}
  List.findOneAndUpdate({category: req.params.id}, {$push: {list: [newListItem]}}, {new: true})
    .then(category => res.json(category.list))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/updatechecked/:id').post((req, res) => {
  List.findOneAndUpdate({category: {_id: req.body.category}, "list._id": req.params.id}, {"list.$.isChecked": req.body.isTrue}, {new: true})
    .then(category => res.json(category))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router