const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config() 

mongoose.connect(process.env.MONGO_URI) 
  .then((err) => console.log('mongoose connected!!'))

mongoose.connection.on('error', (err) => {
  console.log(`mongoose connection error: ${err.message}`)
})

app.get('/', (req, res) => {
  res.send('hello from node')
})

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
