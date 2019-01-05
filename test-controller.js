const person = {
    name:'张三',
    age:18,
    gender:'图图'
}
const goIndex = (req,res) => {
    res.render('index.html',person)
}
module.exports = {
    goIndex
}