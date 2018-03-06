const path=require('path');
const express=require('express');
const mes=require('./utils/message.js').generateValues;
var http=require('http');
const socketIO=require('socket.io'); 
var add=path.join(__dirname,"../public")
// console.log(__dirname,"..","/public");
var port=process.env.PORT||3000;
var app=express();
var server=http.createServer(app);
app.use(express.static(add));
var io=socketIO(server);        //server relates to 9th line
io.on('connection',(socket)=>{
    console.log('New user connected');
    socket.on('createMessage',(val,callback)=>{
console.log(val);callback();
 socket.broadcast.emit('newMessage',mes(val.from,val.text));

});
//  socket.broadcast.emit('newMessage',mes('admin','I am Back'))

socket.emit('newMessage',mes('admin','welcome'));

 
// socket.emit('welcome',('Welcome ashwin'));
    socket.on('disconnect',()=>{                //dissconnect dont change the name
    console.log("client disconnected ");
});

});


server.listen(port,()=>{

console.log(`Listening on port ${port}`);
});