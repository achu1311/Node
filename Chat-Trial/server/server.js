const express=require('express');
const path=require('path');
const SocketIO=require('socket.io');
const http=require('http');


const publicPath=path.join(__dirname,'../public')
let app=express();
app.use(express.static(publicPath));
let server=http.createServer(app);
var io=SocketIO(server)


io.on('connection',(socket)=>{
    console.log('New user connected');
    socket.emit('newMessage',{from:'Ashwin',message:'Hello from me server'})
    
    socket.on('createMessage',(message)=>{
        console.log(message);
        //sends message to everyone including himself
        io.emit('newMessage',{from:message.from,message:message.message,createdAt:new Date().getTime()})
    })
    //only to the connected specific socket 
    socket.emit('newMessage',{from:'admin',message:'Welcome to the chat',createdAt:new Date().getTime()})
    //sends message to everyone excluding himself
    socket.broadcast.emit('newMessage',{from:'admin',message:'New User joined',createdAt:new Date().getTime()})
    socket.on('disconnect',()=>{
        console.log('disconnected');
    })
})



server.listen(3000,()=>{
    console.log('connected');
})