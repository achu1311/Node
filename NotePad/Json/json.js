const fs=require('fs');
var orig={
 name:'ashwin',
  place:'tn'  
  
};
console.log(typeof orig);
var origi=JSON.stringify(orig);
fs.writeFileSync('notes.json',origi);
var notes= fs.readFileSync('notes.json');
console.log(typeof notes);
console.log(notes);
var notess=JSON.parse(notes);
console.log(notess);

console.log(typeof notess);