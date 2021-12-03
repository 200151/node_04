const express=require('express')
const dotenv = require('dotenv')

dotenv.config()
const host=process.env.HOST
const port=process.env.PORT
const default_login_name=process.env.LOGIN_NAME
const default_password=process.env.PASSWORD

const app=express()

app.use(express.static(__dirname+'/public'))

app.post('/auth',(req,res)=>{
    let message='ログインできません'
    const login_name=req.body.login_name
    const password=req.body.password
    console.log(login_name)
    console.log(password)
    res.send(message) 
})

app.get('/',(req,res)=>{
    res.send('Hello YSE!!!!') 
})

app.listen(port,host,()=>{
    console.log('http://'+host+':'+port)
})