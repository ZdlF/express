const express = require("express")
const path = require("path")
const app = express()
// 配置需要使用的模板引擎
app.set('view engine','ejs')

// 设置模板引擎的存放路径
app.set('views',path.join(__dirname,'./views'))


// 托管页面资源
app.use('/assets',express.static('assets'))

// ers.render渲染动态页面
// app.get(''/,(req,res) => {
//     res.render('index.ejs', person)
// })

// 引入自己写的router文件
const router = require('./router.js')

// 注册router
app.use(router)

app.listen(3000,() => {
    console.log("http://127.0.0.1:3000")
})