let socket=io();
socket.on('connect',()=>{
    console.log('Connected to server');

    socket.emit('createMessage',{from:'Ashwin ',message:'Message from client',createdAt:new Date().getTime()})
})
    socket.on('newMessage',(message)=>{
        console.log(message);
    })



 socket.on('disconnect',()=>{
    console.log('Disconnected');
})