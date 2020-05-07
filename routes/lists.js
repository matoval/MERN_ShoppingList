const router = require('express').Router()
let List = require('../models/lists.model')

router.route('/').get((req, res) => {
  List.find()
    .then(list => res.json(list))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const creator = req.body.creator
  const sharedWith = req.body.sharedWith
  const list = req.body.list
  const categoryTitle = req.body.categoryTitle

  const newList = new List({
    categoryTitle: categoryTitle,
    creator: creator,
    sharedWith: sharedWith,
    list: list
  })

  newList.save()
    .then(() => res.json('List added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  List.findById(req.params.id)
    .then(list => res.json(list))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/searchcreator/:id').get((req, res) => {
  List.find({creator: req.params.id})
    .then(list => res.json(list))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  List.findByIdAndDelete(req.params.id)
    .then(() => res.json('List deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/delete/:id').post((req, res) => {
  List.findByIdAndUpdate(req.params.id, {$pull: {list: {_id: req.body.del}}}, {new: true})
    .then(category=> res.json(category))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  const newListItem = {title: req.body.title, isChecked: false}
  List.findByIdAndUpdate(req.params.id, {$push: {list: [newListItem]}}, {new: true})
    .then(category => res.json(category.list))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/updatechecked/:id').post((req, res) => {
  List.findOneAndUpdate({_id: req.body.category, "list._id": req.params.id}, {"list.$.isChecked": req.body.isTrue}, {new: true})
    .then(category => res.json(category))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/updatesharelist/:id').post((req, res) => {
  console.log(`creatorId: ${req.params.id}`)
  const sharedUser = req.body.sharedUser
  console.log(req.body.sharedUser)
  List.findByIdAndUpdate(req.params.id, {$push: {sharedWith: [{sharedUser: sharedUser}]}}, {new: true})
    .then(list => res.status(200).json(list))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/getlist/:id').get((req, res) => {
  console.log(req.params.id)
  List.findById(req.params.id)
    .then(list => res.status(200).json(list))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/getsharedlists/:id').get((req, res) => {
  List.find({"sharedWith.sharedUser": req.params.id})
    .then(list => res.status(200).json(list))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/removesharedlist/:id').post((req, res) => {
  const sharedIdToDelete = req.body.user
  List.findByIdAndUpdate(req.params.id, {$pull: {sharedWith: {sharedIdToDelete}}}, {new: true})
    .then(list => res.status(200).json(list))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router