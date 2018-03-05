const path=require('path');
var add=path.join(__dirname,"../public")
// console.log(__dirname,"..","/public");
var port=process.env.PORT||3000;
console.log(add);
const express=require('express');
var app=express();
app.use(express.static(add));

app.listen(port,()=>{

console.log(`Listening on port ${port}`);
});