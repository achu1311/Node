const fs=require('fs');
//var aaa="asdasd";
//console.log(typeof aaa);
fs.writeFileSync('notes.json',"dadasd");
var a="";
var val=fs.readFile('notes.json','utf-8',function(err, data){
    console.log(typeof data);
//console.log(data);  
  var s=a+data;
  console.log(s);         
return data;
// a=a+data;
                       });
//               console.log(s);
//console.log(data);         

//var notess=JSON.parse(notes);
//console.log(notess);

//console.log(typeof notess);