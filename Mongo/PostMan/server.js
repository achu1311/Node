const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const {todo}=require('./Todo');
var app=express();
app.use(bodyparser.json());
app.post('/todos',(req,res)=>{

var toDo=new todo({
    text:req.body.text
});

toDo.save().then((doc)=>{res.send(doc);}
,(err)=>{

res.status(400).send();
});


})
app.listen(3000,()=>{

    console.log("ss");
});

// mongoose.connect('mongodb://localhost:27017/TodoApp');
// mongoose.Promise=global.Promise;

// var Todo=mongoose.model('ToDoValues',   //here ToDoValues is collection value
// {
// text:{type:String,required:true,trim:true},
// completed:{type:Boolean,default:false},
// completedAt:{type:Number,default:null}


// });


// var newToDo=new Todo({
//     text:'cook dinner'
// });



