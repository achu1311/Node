const express=require('express');
const path=require('path');
const SocketIO=require('socket.io');
const http=require('http');
const generateMessage=require('../public/utils/message.js');
const {isRealString} = require('./utils/validation');
const publicPath=path.join(__dirname,'../public')
let app=express();
app.use(express.static(publicPath));
let server=http.createServer(app);
var io=SocketIO(server)


io.on('connection',function(socket){
    console.log('New user connected');
    //only to the connected specific socket 
    socket.on('join',function(params,callback){
        if (!isRealString(params.name) || !isRealString(params.room)) {
            callback('Name and room name are required.');
          }
          socket.join(params.room);
          // socket.leave('The Office Fans');
      
          // io.emit -> io.to('The Office Fans').emit
          // socket.broadcast.emit -> socket.broadcast.to('The Office Fans').emit
          // socket.emit
          socket.emit('newMessage',generateMessage.generateMessage('Ashwin','Welcome to chat app'));
          //sends message to everyone excluding himself
          socket.to(params.room).broadcast.emit('newMessage',generateMessage.generateMessage('admin',`${params.name} has joined`));    
          callback();
    })
    
    // socket.emit('newMessage',generateMessage.generateMessage('Ashwin','Welcome to chat app'));
    // //sends message to everyone excluding himself
    // socket.broadcast.emit('newMessage',generateMessage.generateMessage('admin','New User joined'));    
    
    socket.on('createMessage',function(message,callback){
        console.log(message);
        //sends message to everyone including himself
        io.emit('newMessage',generateMessage.generateMessage(message.from,message.text));
        callback('Succesfully sent');
    })


    socket.on('createLocationMessage',function(coords){
        // io.emit()
        io.emit('newLocationMessage', generateMessage.generateLocationMessage('Ashwin', coords.latitude, coords.longitude));
    })
    socket.on('disconnect',function(){
        console.log('disconnected');
    })
})



server.listen(3000,()=>{
    console.log('connected');
})