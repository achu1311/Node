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
        let messageField=jQuery('[name=message]')
        // console.log('inside messsage form',jQuery('[name=message]').val());
        e.preventDefault();
        socket.emit('createMessage',
        {
            from:'message form',
            text:messageField.val(),
            createdAt:new Date().getTime()
        },
        function(data){
            messageField.val('');
        })
    })


    //location related
  let locationButton=jQuery('#send-location');
  locationButton.on('click',function(){
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by your browser.');
      }
    locationButton.attr('disabled','disabled').text('sending location....');
      navigator.geolocation.getCurrentPosition(function (position) {
        locationButton.removeAttr('disabled').text('Send location');
        socket.emit('createLocationMessage', {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      }, function () {
          locationButton.removeAttr('disabled').text('Send location');
        alert('Unable to fetch location.');
      });
    });

    socket.on('newLocationMessage',function(data){
        let a=jQuery('<a target="_blank">My current location</a>');
        let li=jQuery('<li></li>');
        li.text(`${data.from}: `);
        a.attr('href',data.url);
        li.append(a);
        jQuery('#messages').append(li); 
    })


 socket.on('disconnect',function(){
    console.log('Disconnected');
})