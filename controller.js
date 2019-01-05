const person = {
    name:'java',
    age:'5',
    gender:'man'
}

const goIndex = (req,res) => {
    res.render('index.ejs',person)
}

module.exports = {
    goIndex
}