const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('config')
const cookieParser = require('cookie-parser')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(cookieParser())
app.use(express.json())

const uri = config.get('mongoURI')
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
const connection = mongoose.connection
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

const usersRouter = require('./routes/users')
const categoryRouter = require('./routes/category')
const listItemRouter = require('./routes/listItem')

app.use('/users', usersRouter)
app.use('/category', categoryRouter)
app.use('/listItem', listItemRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})