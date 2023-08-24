const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const port = 8080
const route = require('./routes/route.js')
const { conn } = require('./config/connect.js')

app.use(cors({
  credentials: true,
  origin: true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

route(app)

conn()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})