var axios=require('axios');
const yargs=require('yargs');
const argv= yargs.options({
  a:{
    demand:true,
    alias:'address',
    describe:'Address to fetch',
    string:true
   }
})
.help()
.alias('help','h')
.argv;
 var val=encodeURIComponent(argv.a);

var address='https://maps.googleapis.com/maps/api/geocode/json?address='+val;

 axios.get(address).then((response)=>{
  if(response.data.status==='ZERO_RESULTS'){
    throw new Error("Address not found");
  }
  else
  console.log(response.data.results[0].formatted_address);
   var lat=response.data.results[0].geometry.location.lat;
   var long=response.data.results[0].geometry.location.lng;
           var add2="https://api.darksky.net/forecast/c59661a8c7b84ce32041479bbb6397e0/"+lat+","+long;
   return axios.get(add2);

  
}).then((response)=>
  { 
   var temp=response.data.currently.temperature;
   var apptemp=response.data.currently.apparentTemperature;
//    console.log(`Its currently ${temp} but feels like ${apptemp}`);
throw new Error("VVVVV");   
        }).catch((e)=>{
  if(e.code==='ENOTFOUND')
   console.log('Unable to connect to server API')  
  else
    console.log('No Data Found');
});