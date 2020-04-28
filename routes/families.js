const router = require('express').Router()
let Family = require('../models/family.model')

router.route('/').get((req, res) => {
  Family.find()
    .then(family => res.json(family))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const user = req.body.user
  const spouseIsAUser = req.body.spouse.spouseIsAUser
  const spouseUserID = req.bady.spouse.spouseUserID
  const spouseEmail = req.body.spouse.spouseEmail
  const spouseUsername = req.body.spouse.spouseUsername
  const spouseName = req.body.spouse.spouseName
  const childName = req.body.childern.childName
  const childBirthday = req.body.childern.childBirthday
  const childIsAUser = req.body.childern.childIsAUser
  const childUserId = req.body.childern.childUserId
  const childUsername = req.body.childern.childUserName
  const childIsAdult = req.body.childern.childIsAdult
  const momSideIsAUser = req.body.momSide.momSideIsAUser
  const momSideUserId = req.body.momSide.momSideUserId
  const momSideEmail = req.body.momSide.momSideEmail
  const momSideUsername = req.body.momSide.momSideUsername
  const momSideName = req.body.momSide.momSideName
  const dadSideIsAUser = req.body.dadSide.dadSideIsAUser
  const dadSideUserId = req.body.dadSide.dadSideUserId
  const dadSideEmail = req.body.dadSide.dadSideEmail
  const dadSideUsername = req.body.dadSide.dadSideUsername
  const dadSideName = req.body.dadSide.dadSideName
  const inlawSideIsAUser = req.body.inlawSide.inlawSideIsAUser
  const inlawSideUserId = req.body.inlawSide.inlawSideUserId
  const inlawSideEmail = req.body.inlawSide.inlawSideEmail
  const inlawSideUsername = req.body.inlawSide.inlawSideUsername
  const inlawSideName = req.body.inlawSide.inlawSideName


  const newFamily = new Family({
    user: user,
    spouse: {
      spouseIsAUser: spouseIsAUser,
      spouseUserID: spouseUserID,
      spouseEmail: spouseEmail,
      spouseUsername: spouseUsername,
      spouseName: spouseName,
    },
    childern: {
      childName: childName, 
      childBirthday: childBirthday, 
      childIsAUser: childIsAUser,
      childUserId: childUserId, 
      childUserName: childUsername, 
      childIsAdult: childIsAdult
    },
    momSide: {
      momSideIsAUser: momSideIsAUser,
      momSideUserId: momSideUserId,
      momSideEmail: momSideEmail,
      momSideUserName: momSideUsername,
      momSideName: momSideName
    },
    dadSide: {
      dadSideIsAUser: dadSideIsAUser,
      dadSideUserId: dadSideUserId,
      dadSideEmail: dadSideEmail,
      dadSideUserName: dadSideUsername,
      dadSideName: dadSideName
    },
    inlawSide: {
      inlawSideIsAUser: inlawSideIsAUser,
      inlawSideUserId: inlawSideUserId,
      inlawSideEmail: inlawSideEmail,
      inlawSideUserName: inlawSideUsername,
      inlawSideName: inlawSideName
    }
  })

  newFamily.save()
    .then(() => res.json('Family added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  Family.findById(req.params.id)
    .then(family => res.json(family))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  Family.findByIdAndDelete(req.params.id)
    .then(() => res.json('Family deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  Family.findById(req.params.id)
    .then(family => {
      family.user = req.body.user
      family.spouse.spouseIsAUser = req.body.spouse.spouseIsAUser
      family.spouse.spouseUserID = req.bady.spouse.spouseUserID
      family.spouse.spouseEmail = req.body.spouse.spouseEmail
      family.spouse.spouseUsername = req.body.spouse.spouseUsername
      family.spouse.spouseName = req.body.spouse.spouseName
      family.childern.childName = req.body.childern.childName
      family.childern.childBirthday = req.body.childern.childBirthday
      family.childern.childIsAUser = req.body.childern.childIsAUser
      family.childern.childUserId = req.body.childern.childUserId
      family.childern.childUsername = req.body.childern.childUserName
      family.childern.childIsAdult = req.body.childern.childisAdult
      family.momSide.momSideIsAUser = req.body.momSide.momSideIsAUser
      family.momSide.momSideUserId = req.body.momSide.momSideUserId
      family.momSide.momSideEmail = req.body.momSide.momSideEmail
      family.momSide.momSideUsername = req.body.momSide.momSideUsername
      family.momSide.momSideName = req.body.momSide.momSideName
      family.dadSide.dadSideIsAUser = req.body.dadSide.dadSideIsAUser
      family.dadSide.dadSideUserId = req.body.dadSide.dadSideUserId
      family.dadSide.dadSideEmail = req.body.dadSide.dadSideEmail
      family.dadSide.dadSideUsername = req.body.dadSide.dadSideUsername
      family.dadSide.dadSideName = req.body.dadSide.dadSideName
      family.inlawSide.inlawSideIsAUser = req.body.inlawSide.inlawSideIsAUser
      family.inlawSide.inlawSideUserId = req.body.inlawSide.inlawSideUserId
      family.inlawSide.inlawSideEmail = req.body.inlawSide.inlawSideEmail
      family.inlawSide.inlawSideUsername = req.body.inlawSide.inlawSideUsername
      family.inlawSide.inlawSideName = req.body.inlawSide.inlawSideName

      Family.save()
        .then(() => res.json('Family updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router