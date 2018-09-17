const express=require('express');
const path=require('path');
const SocketIO=require('socket.io');
const http=require('http');
const generateMessage=require('../public/utils/message.js')

const publicPath=path.join(__dirname,'../public')
let app=express();
app.use(express.static(publicPath));
let server=http.createServer(app);
var io=SocketIO(server)


io.on('connection',(socket)=>{
    console.log('New user connected');
    socket.emit('newMessage',generateMessage.generateMessage('Ashwin','Hello from me server'));
    
    socket.on('createMessage',(message)=>{
        console.log(message);
        //sends message to everyone including himself
        io.emit('newMessage',generateMessage.generateMessage(message.from,message.message));
    })
    //only to the connected specific socket 
    socket.emit('newMessage',generateMessage.generateMessage('admin','Welcome to the chat'))
    //sends message to everyone excluding himself
    socket.broadcast.emit('newMessage',generateMessage.generateMessage('admin','New User joined'))
    socket.on('disconnect',()=>{
        console.log('disconnected');
    })
})



server.listen(3000,()=>{
    console.log('connected');
})