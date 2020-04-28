const router = require('express').Router()
let Category = require('../models/category.model')
const authAccess = require('../middleware/authAccess.middle')
const authRefresh = require('../middleware/authRefresh.middle')

router.route('/').get((req, res) => {
  Category.find()
    .then(category => res.json(category))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const categoryCreator = req.body.creator
  const categoryArray = req.body.categoryArray

  const newCategory = new Category({
    creator: categoryCreator,
    categoryArray: categoryArray
  })

  newCategory.save()
    .then(() => res.json('Category added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  Category.find({"creator": req.params.id})
    .then(category => res.json(category))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then(() => res.json('Category deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})


router.route('/update/:id').post((req, res) => {
  const newCategoryItem = {title: req.body.title}
  Category.findOneAndUpdate({creator: req.params.id}, {$push: {categoryArray: [newCategoryItem]}})
    .then(() => res.json('Category updated.'))
    .catch(err => res.status(400).json('Error: ' + err))
    
})

module.exports = router