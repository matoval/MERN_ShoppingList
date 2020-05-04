const router = require('express').Router()
const mongoose = require('mongoose')
let User = require('../models/user.model')
const authAccess = require('../middleware/authAccess.middle')
const authRefresh = require('../middleware/authRefresh.middle')
const makeAccessToken = require('../middleware/createAccessToken.middle')
const makeRefreshToken = require('../middleware/createRefreshToken.middle')
// const config = require('config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const myId = mongoose.Types.ObjectId()
  const password = req.body.password
  const displayName = req.body.displayName
  const email = req.body.email
  let hashPW = '' 

  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json('User already exists')

      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
          hashPW = hash
             
          const newUser = new User({
            _id: myId,
            displayName,
            email,
            hashPW,
          })
      
          newUser.save()
          .then(() => res.json(newUser._id))
          .catch(err => res.status(400).json('Error: ' + err))

        })
      })
    })
})

router.route('/login').post((req, res) => {
  const email = req.body.email
  const password = req.body.password

  User.findOne({email: email})
    .then(user => {
      if(!user) {
        res.status(400).json('Authentication failed')
      } else {
        bcrypt.compare(password, user.hashPW, (err, result) => {
          if (result === true) {
            const refreshToken = makeRefreshToken(user)
            const accessToken = makeAccessToken(user)

            res.setHeader('Cache-Control', 'private')
            res.cookie('refreshToken', refreshToken, { maxAge: 6000000, httpOnly: true})
            res.cookie('accessToken', accessToken, { maxAge:  9000000, httpOnly: true })
            res.status(200).send({userId: user._id})
          } else {
            res.status(400).json('Authentication failed')
          }
        })
      }
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/stayloggedin').get((req, res) => {
  getAccess = req.cookies.accessToken
  if (getAccess !== undefined) {
    const decoded = jwt.verify(getAccess, process.env.JWT_ACCESS_SECRET)
    User.findById(decoded.userId)
      .select("-hashPW")
      .then(data => res.json({
        userId: data._id
      }))
      .catch(err => res.status(400).json('Error: ' + err))
  } else {
    res.json('No Authentication')
  }
})

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .select("-hashPW")
    .then(user => res.json({
      user
    }))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      const password = req.body.password
      let hashPW = '' 

      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            hashPW = hash

            user.displayName = req.body.displayName
            user.email = req.body.email
            user.hashPW = hashPW
            
            user.save()
              .then(user => res.status(200).json(user))
              .catch(err => res.status(400).json('Error: ' + err))
          });
      });

    })
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/getuser/:id').get((req, res) => {
  User.findOne({email: req.params.id})
  .select("-hashPW")
  .then(user => res.json({
    user
  }))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router