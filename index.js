require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/test', (req, res) => {
    res.send("<h1>test</h1>")
})

app.get('/login', (req, res) => {
    res.send("<h1>login</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h1>youtube</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})