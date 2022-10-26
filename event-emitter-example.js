const EventEmitter = require('events')
const emitter = new EventEmitter
// Register a Listner
emitter.on('messegeLogged',()=>{
     console.log('listner is called')
})
// Raise an Event
emitter.emit('messegeLogged')

