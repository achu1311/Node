const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.Promise=global.Promise;
const {todo}=require('./Todo');
var app=express();
app.use(bodyparser.json());
app.post('/todos',(req,res)=>{

var toDo=new todo({
    text:req.body.text
});



//updating values to mongo

// app.post('/todos',(req,res)=>{

// var toDo=new todo({  
//     text:req.body.text
// });

// toDo.save().then((doc)=>{
//     res.send(doc);


// console.log(doc);
// }
// ,(err)=>{

// res.status(400).send();
// });

// console.log(JSON.stringify(req.body));

// res.send(req.body);
//})

//

toDo.save().then((doc)=>{res.send(doc);}
,(err)=>{

res.status(400).send();
});


})
app.listen(3000,()=>{

    console.log("ss");
})