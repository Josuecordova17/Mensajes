const colors=require('colors')
const express=require('express')
const app=express()
const morgan=require('morgan')
const mensajes=[]
const port = process.env.PORT || 3000 
app.use(morgan('dev'))
app.use(express.json())
app.listen(port,()=>{
//
console.log(`servidor en puerto `+port)
})
//
app.set('view engine','ejs')
//
app.put('/mandar',(req,res)=>{
    mensajes.push(req.body)
    console.log(mensajes);
    res.send(mensajes)
})
app.get('/pedir',(req,res)=>{
    res.send(mensajes)
})
app.use(express.static('public'))
