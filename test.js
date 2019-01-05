// 原生开启服务器
// const http = require('http')
// const app = http.createServer()
// app.on('request',(req,res) => {
//     res.end('ok')
// })
// app.listen(3000,() => {
//     console.log('http://127.0.0.1:3000')
// })

/*
// 1. express的基本使用
const express = require('express')
const path = require('path')

const app = express()

//2.express托管静态资源
app.use('/assets',express.static(path.join(__dirname,'assets')))

// 3.模板渲染
const person = {
    name:'张三',
    age:18,
    gender:'图图'
}
 // ejs
//  app.set('view engine', 'ejs')
//  app.set('views',path.join(__dirname,'/views'))

// html
app.set('view engine', 'html')
const ejs = require('ejs')
app.engine('html',ejs.__express)

app.get('/views/index.html',(req,res) => {
    // res.sendFile只能返回静态页面
    // res.sendFile(path.join(__dirname,'/views/index.html'))

    // res.render可以返回动态页面

    // ejs
    // res.render('index.ejs',person)

    // html
    res.render('index.html',person)
})

app.listen(3000,() => {
    console.log('server running at http://127.0.0.1:3000')
})
*/


const express = require('express')
const path = require('path')

const app = express()
const router = require('./test-router.js')

app.set('view engine', 'html')
const ejs = require('ejs')
app.engine('html',ejs.__express)

app.use('/assets',express.static(path.join(__dirname,'assets')))

app.use(router)

app.listen(3000,() => {
    console.log('server running at http://127.0.0.1:3000')
})