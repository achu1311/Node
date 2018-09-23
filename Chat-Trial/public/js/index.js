let socket=io();
socket.on('connect',function(){
    console.log('Connected to server');
})
    socket.on('newMessage',function(message){
        console.log(message);
        var formattedTime = moment(message.createdAt).format('h:mm a');
        
        var template = jQuery('#message-template').html();
        var html = Mustache.render(template, {
          text: message.text,
          from: message.from,
          createdAt: formattedTime
        });
        jQuery('#messages').append(html)
        // var li=jQuery('<li></li>');
        // li.text(`${message.from} ${formattedTime} :${message.text}`)
        // jQuery('#messages').append(li)

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

    socket.on('newLocationMessage',function(message){
        // let a=jQuery('<a target="_blank">My current location</a>');
        // let li=jQuery('<li></li>');
        console.log('new location mess',message);
        var formattedTime = moment(message.createdAt).format('h:mm a');
        var template = jQuery('#location-message-template').html();
        var html = Mustache.render(template, {
            from: message.from,
            url: message.url,
            createdAt: formattedTime
          });

          console.log('new location mess',html,message.url);
        jQuery('#messages').append(html); 

        // li.text(`${data.from} ${formattedTime}: `);
        // a.attr('href',data.url);
        // li.append(a);
        // jQuery('#messages').append(li); 
    })


 socket.on('disconnect',function(){
    console.log('Disconnected');
})