var event=require('events');
var val=new event.EventEmitter();
var g=(val1)=>{
  
  console.log(val1);
  
  
}
val.on('data',function(){

  g("received data");
  
})
val.emit('data');