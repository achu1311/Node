var express=require('express');
const hbs=require('hbs');
const fs=require('fs');
var app=express();
app.use(express.static(__dirname+'/public'));//default location for html files even if we go to cross platforms it ll be homedir/pjtname/public
app.set('view engine','hbs');       //hbs is used for rendering files of html in file we can send arguement also with request
//Default folder for this is home directory/pjt files/views/finename.hbs
hbs.registerPartials(__dirname+'/views/partials');    //for common elements in multiple files
//used when we use for eg:when we use common footer for multiple files.


//app.use((req,res))

hbs.registerHelper('Year',()=>{
  return new Date().getFullYear();
})  ;              // function used when same argument used for multiple files.Returns year for both home and about.

 hbs.registerHelper('Value',(text)=>{
  return text.toUpperCase()
})

//for giving only maintanence page

// app.use((req,res,next)=>{
//   var now=new Date().toString();
//   var log1=`${now}:${req.method} ${req.url}`;
//   console.log(log1);
//   fs.appendFile('server.log',log1+'\n');
// res.send("Maintanenr")
//   // or i can use res.render(hbs html filename)
    //if we use next(); fn here it will proceed otherwise it wont
//
//})

//

  // or i can use res.render(hbs html filename)
})
app.get('/',(req,res)=>{      // / used for mentioning home directory in project
  res.render('home.hbs',{
    pageTitle:'Welcome'         //argument
  });
});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'About Page'
  });
});
app.get('/bad',(req,res)=>{
  res.send({Error:" Request"});
});
app.listen(7000);