let socket=io();
socket.on('connect',function(){
    console.log('Connected to server');
})
    socket.on('newMessage',function(message){
        console.log(message);
    })
    socket.emit('createMessage',{from:'Ashwin ',message:'Message from client2',createdAt:new Date().getTime()},function(data){
        console.log(data);
    })


 socket.on('disconnect',function(){
    console.log('Disconnected');
})