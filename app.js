const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello from node')
})

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
