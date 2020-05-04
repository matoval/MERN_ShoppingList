const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('config')
const cookieParser = require('cookie-parser')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors({
  origin: 'https://mern-shopping-list-matoval.herokuapp.com/',
  credentials: true
}))
app.use(cookieParser())
app.use(express.json())

const uri = config.get('mongoURI')
mongoose.connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
const connection = mongoose.connection
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

const usersRouter = require('./routes/users')
const listsRouter = require('./routes/lists')

app.use('/users', usersRouter)
app.use('/lists', listsRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})