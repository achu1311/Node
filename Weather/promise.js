var add=function(a,b){
return new Promise(function(resolve,reject){
 
  resolve(a+b);
  reject("no");
}); };
add(4,6).then((ans)=>{
  console.log("result ",ans);
  return add(ans,22);
},(rej)=>{
  console.log(rej);
}).then((val)=>{
  console.log("result2 ",val)
},(error)=>{
        console.log(error);
        });