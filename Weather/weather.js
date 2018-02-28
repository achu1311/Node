var req=require('request');
var weatherTemp=function(lat,long,callback){
        var add2="https://api.darksky.net/forecast/c59661a8c7b84ce32041479bbb6397e0/"+lat+","+long;

req({url:add2,json:true},(error,response,body)=>{
  
  if(error || body.code===400){
    callback("Unable to fetch");
  }

//          console.log(JSON.stringify(body,undefined,1));
  else{
//     console.log(body.currently.temperature);
     callback(undefined,{temparature:body.currently.temperature
                        });
                        
  }

});
  
  
}
module.exports={
  weatherTemp
}