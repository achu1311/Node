var socket=io();
socket.on('connect',function(){
    console.log("connected to server");

socket.on('newMessage',function(val){
    console.log(val);
})
});
    socket.emit('createMessage',{from:'achu',text:'This is me'
},function(){
console.log("Got It");
});
socket.on('disconnect',function(){
    console.log("disconnected from server");
});