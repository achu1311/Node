const fs=require('fs');

var readfile=function(){
  try{
    var val=fs.readFileSync('NoteFile.js');
    notes=JSON.parse(val);
   return notes;
  }
  catch(e){
    
    return [];
  }
};
var writefile=(notes)=>{
 
  fs.writeFileSync("NoteFile.js",JSON.stringify(notes));
 
};
var addNote=(title,body)=>{
var notes=readfile();
  var note={
    title,
    body
  };
  
  
  var dup=notes.filter((note)=>{
    return note.title==title;
  });
      console.log(dup);

  if(dup.length===0){

    notes.push(note);
      console.log(notes);
    writefile(notes);
  }
//   console.log("Adding",body);
  
};
var removedata=function(title){
  var file=readfile();
  var remfile=file.filter((note) => note.title!==title);
writefile(remfile);
  return file.length===remfile.length;

}
var getNotes=function(title){
  var notes=readfile();
  var body=notes.filter((note)=>note.title===title);
  return body[0];
}

var getAll=function(){
  console.log("as");
  var notes=readfile();
  notes.forEach((note)=>{
console.log(note.title," ",note.body)});
                //     console.log(note.title," ",note.body));
}

module.exports={
  addNote,
  removedata,
  getNotes,
  getAll
  
};