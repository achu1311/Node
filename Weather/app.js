const req=require('request');
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
console.log(argv.a);
var val=encodeURIComponent(argv.a);

var address='https://maps.googleapis.com/maps/api/geocode/json?address='+val;
console.log(address);
req({url:'https://maps.googleapis.com/maps/api/geocode/json?address=chinnamanur',json:true},(error,response,body)=>{
//          console.log(JSON.stringify(body,undefined,1));
console.log(body.results[0].geometry.location.lat);
  console.log(body.results[0].geometry.location.lng);

});





