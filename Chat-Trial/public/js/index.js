let socket=io();
socket.on('connect',function(){
    console.log('Connected to server');
})
    socket.on('newMessage',function(message){
        console.log(message);
        var li=jQuery('<li></li>');
        li.text(`${message.from}:${message.text}`)
        jQuery('#messages').append(li)

    })

    jQuery('#message-form').on('submit',function(e){
        console.log('inside messsage form',jQuery('[name=message]').val());
        e.preventDefault();
        socket.emit('createMessage',
        {
            from:'message form',
            text:jQuery('[name=message]').val(),
            createdAt:new Date().getTime()
        },
        function(data){
            console.log(data);
        })
    })
  
 socket.on('disconnect',function(){
    console.log('Disconnected');
})