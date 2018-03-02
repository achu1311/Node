const yargs=require('yargs');
const geocode=require('./geocode.js');
const weather=require('./weather.js');

const argv= yargs.options({
  a:{
    demand:true,
    alias:'address',
    describe:'Address to fetch',
    string:true
   }//,b:{
//     demand:true,
//     alias:'add',
//     describe:'fetch',
//     string:true
//   }
})
.help()
.alias('help','h')
.argv;
//console.log(argv.a);

geocode.geocodeAddress(argv.a,(errMes,results)=>{
  if(errMes){
    console.log(errMes); }
  else {
    console.log(JSON.stringify(results,undefined,2))
  }
//   console.log(results.longitude+" "+results.latitude);
 weather.weatherTemp(results.latitude,results.longitude,function(err,res){
  if(err){
    console.log(err);
  }
  else {
    console.log(typeof res);
    
    console.log(res);
  
    console.log(JSON.stringify(res,undefined,2));
  }
  
  
});
 
});





