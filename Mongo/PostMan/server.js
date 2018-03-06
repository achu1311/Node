const express=require('express');
const {ObjectID}=require('mongodb');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const _=require('lodash');
mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.Promise=global.Promise;
const {todo}=require('./Todo');
var app=express();
app.use(bodyparser.json());

//Update values by getting id with json values

//  app.patch('/todos',(req,res)=>{
//  var id=req.query.id;
//  var body=_.pick(req.body,['text','completed']);
 
// body.completed=true;
// body.completedAt=12121;

//  console.log(id);
//  if(!ObjectID.isValid(id))
//  console.log("Not valid");
//     todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
//         res.send(todo);
//     },(err)=>{
//  console.log("Error Value");

//     });
//  });






//Getting values of id through URL

//  app.get('/todos',(req,res)=>{
//  var id=req.query.id;
//  console.log(id);
//  if(!ObjectID.isValid(id))
//  console.log("Not valid");
//     todo.findById(id).then((todo)=>{
//          if(!todo)
//          return console.log("Not Found");
//         res.send({todo});
//     },(err)=>{
//  console.log("Error Value");


// });
//  });

//

//Getting values using ID

// var id='5a98fcd3e793b43078e4b0bf';
// if(!ObjectID.isValid(id))
//  console.log("Not valid");
//  app.get('/todos',(req,res)=>{
//     todo.findById(id).then((todo)=>{
//          if(!todo)
//          return console.log("Not Found");
//        //  console.log(todo);
//         res.send(todo);
//     },(err)=>{
// console.log("Error Value");

//     });
// });

//

// app.post('/todos',(req,res)=>{

// var toDo=new todo({
//     text:req.body.text
// });




//updating values to mongo

app.post('/todos',(req,res)=>{

var toDo=new todo({  
    text:req.body.text
});

toDo.save().then((doc)=>{
    res.send(doc);
//console.log(doc);
}
,(err)=>{

res.status(400).send();
});

console.log(JSON.stringify(req.body));

// res.send(req.body);
})

//

//saving

// toDo.save().then((doc)=>{res.send(doc);}
// ,(err)=>{

// res.status(400).send();
// });

//

//})


app.listen(3000,()=>{

    console.log("ss");
})