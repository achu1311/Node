var socket=io();
socket.on('connect',()=>{
    console.log("connected to server");
    socket.emit('createMessage',{from:'achu',text:'This is me'
});
socket.on('newMessage',(val)=>{
    console.log(val);
})

});

socket.on('disconnect',()=>{
    console.log("disconnected from server");
});