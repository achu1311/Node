var event=require('events');
var val9=new event.EventEmitter();

var e=function(val1){
  
setTimeout(function(){      //use process.nextTick or timeout
  val.emit('data',"I m Back");
  
  val.emit('ala1',"fsdf");
val.emit('ala12');
},100)
  for(var i=0;i<100;i++){
    console.log(i);
  }
  return val9;
}
var val=e("I mBack");
val.on('data',function(val1){

  console.log(val1);
  
})
  
  val.on('ala1',function(val1){

  console.log("C23");
  
})
    
  val.on('ala12',function(){

  console.log("New");
  
})
  

//       console.log(val1);


  

