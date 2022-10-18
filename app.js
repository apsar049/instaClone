const express = require('express')
require('./db/connection')
require('dotenv').config()
const app = express()
const router = require('./routes/router')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(router)
app.use('/uploads', express.static('./uploads'))
app.listen(process.env.PORT || 8080, () => {
  console.log(`port running on 8080`)
})
