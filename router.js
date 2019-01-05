const express = require('express')
const router = express.Router()
const {goIndex} = require('./controller.js')
const person = {
    name:'java',
    age:'5',
    gender:'man'
}

router.get('/',goIndex)
console.log(router)
module.exports = router


