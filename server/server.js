const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const expressValidator = require('express-validator');
require('dotenv').config()

// routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const braintreeRoutes = require('./routes/braintree')

const app = express()

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('mongoose connected!!'))
mongoose.connection.on('error', (err) => {
  console.log(`mongoose connection error: ${err.message}`)
})

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(expressValidator())
app.use(cors())

app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', braintreeRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
