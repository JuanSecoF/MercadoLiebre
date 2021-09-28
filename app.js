const express = require("express")
const path = require("path")
const app= express()
app.use(express.static(path.resolve(__dirname, "./public")));

app.listen('3000', () => {
    console.log(
        'Bien ahi genio iniciaste en el servidor',
        'http://localhost:3000'
    )
})

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/register.html'))
})
app.post('/register' , (req,res) =>{
    
    res.redirect('/')
})

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
app.post('/login' , (req,res) =>{
    res.redirect('/')
})