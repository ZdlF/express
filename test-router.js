const express = require('express')
const path = require('path')

const router = express.Router()
const person = {
    name:'张三',
    age:18,
    gender:'图图'
}
const {goIndex} = require(path.join(__dirname,'./test-controller.js'))

// router.get('/index',(req,res) => {
//     res.render('index.html',person)
// })

router.get('/index',goIndex)

module.exports = router