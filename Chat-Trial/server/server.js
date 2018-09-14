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
    socket.on('disconnect',()=>{
        console.log('disconnected');
    })
})



server.listen(3000,()=>{
    console.log('connected');
})