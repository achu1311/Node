const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.Promise=global.Promise;
var Todo=mongoose.model('ToDoValues',   //here ToDoValues is collection value
{
text:{type:String,required:true,trim:true},
completed:{type:Boolean,default:false},
completedAt:{type:Number,default:null}


});


var newToDo=new Todo({
    text:'cook dinner'
});

newToDo.save().then((doc)=>{console.log(doc)}
,(err)=>{

console.log(err);
});