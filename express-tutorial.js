const express = require('express')
 const app = express()
 app.get('/',(req,res)=>{
     res.send('hello world')
 })
 app.get('/info', (req,res)=>{
     res.send('It is made by roshith')
 })
  
 app.listen(8080,(req,res)=>console.log('running'))