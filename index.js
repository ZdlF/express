const express = require('express')
const path = require('path')
const app = express()
app.get('/',(req,res) => {
    res.send("express server")
})

app.get('/views/index.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/index.html'))
})

app.get('/views/about.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/about.html'))
})

app.get('/assets/css/1.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'/assets/css/1.css'))
})

app.get('/assets/js/1.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'/assets/js/1.js'))
})

app.post('/api/postinfo',(req,res) => {
    res.send('post请求......')
})

app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000')
})


const express = require("express")
const path = require("path")
const app = express()
app.use(express.static(path.join(__dirname,"/")))
app.listen(3000,() => {
    console.log("http://127.0.0.1:3000")
})
