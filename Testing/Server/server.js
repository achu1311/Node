var express=require('express');
var app=express();
app.get(('/'),(req,res)=>{
res.status(400).send({
    error:'Not Found',
    name:'achu'
});

});
app.listen(3000);
module.exports.app=app;