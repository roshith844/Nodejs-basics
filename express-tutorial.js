const express = require('express')
 const app = express()
const id = req.query.id
 app.get('/',(req,res)=>{
     res.send('hello world')
 })
 app.get('/info', (req,res)=>{
     res.send('It is made by roshith')
 })
 app.get('/info/:id',(req,res)=>{
     const id = req.params.id
     res.send('its number '+ id)
 })
 
  
 app.listen(8080,(req,res)=>console.log('running'))