const express = require('express')
// const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

// const allowedOrigins = ['http://localhost:3000/', 'http://localhost:5000/', 'https://mern-shopping-list-matoval.herokuapp.com/']
                      
// app.use(cors({
//   origin: function(origin, callback){  
//     if(!origin) return callback(null, true)

//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }    
//     return callback(null, true);
//   }
// }));

app.use(cookieParser())
app.use(express.json())

// const uri = config.get('mongoURI')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
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