const fs=require('fs');
const _=require('lodash');
const argv1=require('yargs');
const argv=argv1.argv;
var notes=require('./notes.js');
var cmd=process.argv[2];
// console.log(cmd);
if(cmd=='add')
  {
var note=notes.addNote(argv.title,argv.body);
  if(!(note))
  console.log("note already taken");}
if(cmd=="remove"){
 var count= notes.removedata(argv.title);
if(count)
  console.log("Content not found");
  else
    console.log("Removed");
}
if (cmd==='get'){
  var value=notes.getNotes(argv.title);
  console.log(value.body);
}
if(cmd==='getAll'){
  notes.getAll();
  
}