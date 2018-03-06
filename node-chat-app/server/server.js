const path=require('path');
const express=require('express');
var http=require('http');
const socketIO=require('socket.io'); 
var add=path.join(__dirname,"../public")
// console.log(__dirname,"..","/public");
var port=process.env.PORT||3000;
var app=express();
var server=http.createServer(app);
app.use(express.static(add));

server.listen(port,()=>{

console.log(`Listening on port ${port}`);
});