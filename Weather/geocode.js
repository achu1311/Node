// const file=require("/weather.js");
const req=require('request');

var geocodeAddress=function(addres,callback){
  
var val=encodeURIComponent(addres);

var address='https://maps.googleapis.com/maps/api/geocode/json?address='+val;
  var lat,long;
req({url:address,json:true},(error,response,body)=>{
  
  if(error){
    callback("Unable to fetch");
  }
 else if(body.status==='ZERO_RESULTS'){
    callback("Address not found");
  }
//          console.log(JSON.stringify(body,undefined,1));
  else if(body.status==='OK'){
this.lat=body.results[0].geometry.location.lat;
    this.long=body.results[0].geometry.location.lng;
  callback(undefined,{
  address:body.results[0].formatted_address,
  latitude:body.results[0].geometry.location.lat,
  longitude:body.results[0].geometry.location.lng
});
  }

});
//   console.log(lat+" "+long);
//   var add2="https://api.darksky.net/forecast/c59661a8c7b84ce32041479bbb6397e0/"+9.809563599999999+","+77.3898602;
    
// req({url:add2,json:true},(error,response,body)=>{
  
//   if(error){
//     callback("Unable to fetch");
//   }

// //          console.log(JSON.stringify(body,undefined,1));
//   else{
//     console.log(body.currently.temperature);
//         console.log(body.timezone);
//     console.log(body.latitude);
//     console.log(body.longitude);

//   }

// });



}
module.exports={
  geocodeAddress
}