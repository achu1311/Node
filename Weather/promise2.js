//const file=require("/weather.js");
const req=require('request');
var geocodeAddress=function(addres){
  
  //
  return new Promise(function(resolve,reject){
  var val=encodeURIComponent(addres);

var address='https://maps.googleapis.com/maps/api/geocode/json?address='+val;
  var lat,long;
req({url:address,json:true},(error,response,body)=>{
  
  if(error){
    reject("Unable to fetch");
  }
 else if(body.status==='ZERO_RESULTS'){
    reject("Address not found");
  }
//          console.log(JSON.stringify(body,undefined,1));
  else if(body.status==='OK'){
this.lat=body.results[0].geometry.location.lat;
    this.long=body.results[0].geometry.location.lng;
  resolve({
  address:body.results[0].formatted_address,
  latitude:body.results[0].geometry.location.lat,
  longitude:body.results[0].geometry.location.lng
});
  }

});
  });
  
  //
  
  
};
geocodeAddress(625515).then((location)=>{
  
  console.log(JSON.stringify(location,undefined,2));
},
                           (errorMes)=>{
  console.log(errorMes);
});