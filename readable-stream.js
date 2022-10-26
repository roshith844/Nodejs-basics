const http = require('http')
const fs = require('fs')

let myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf-8')
myReadStream.on('data', (chunk)=>{
     console.log('new chunk recieved')
     console.log(chunk)
})
