const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')
const app = express()

const port = process.env.PORT || 8080

require('dotenv').config() 

mongoose.connect(process.env.MONGO_URI) 
  .then((err) => console.log('mongoose connected!!'))

mongoose.connection.on('error', (err) => {
  console.log(`mongoose connection error: ${err.message}`)
})

app.use(user)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
