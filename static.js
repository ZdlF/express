const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'./views')
))

app.use(express.static(path.join(__dirname,'./assets')
))

app.listen(3000,() => {
    console.log('http://127.0.0.1:3000')
})
