const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

if(err)
return console.log(error);
const db=client.db('Todo');            //DB name can be new also


//for inserting a record

// db.collection('todos').insertOne({          //under DB collections are created
//     text:'Ashwin4',
//     completed:true,
//     completedAt:null
// },(err,result)=>{       

// if(err)
// return console.log("Error 2");
//  console.log(JSON.stringify(result,undefined,2));


//  }
// ).then((result)=>{
//   console.log(result);  
    
// },(err)=>{
// console.log('err2');
// })




//fetching data

// db.collection('todos').find().toArray().then((doc)=>{
// console.log(JSON.stringify(doc,undefined,2));
// });


//

//Updation

// db.collection('todos').findOneAndUpdate({_id:new ObjectID('5a97a485efda0f33f0b6fe18')},{$set:{text:'achu'}},{returnOriginal:false}).
// then((res)=>{
// console.log(JSON.stringify(res,undefined,2));
// },(err)=>{
// console.log(err);
// })

//

client.close();

});
