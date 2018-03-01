const path=require('path');
var add=path.join(__dirname,"../public")
console.log(__dirname,"..","/public");
console.log(add);
const express=require('express');
var app=express();
app.use(express.static(add));

// app.get('val',(res,req)=>{
// res.send("Yes");
// });
app.listen(3000,()=>{

console.log("Listening");
});