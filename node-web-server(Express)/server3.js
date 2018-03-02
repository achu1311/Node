// var express=require('express');
// var app=express();
// app.get('/',(req,res)=>{      // / used for mentioning home directory in project
//   res.send("<h1>osifhosifhoas</h1>");
// });
// app.listen(3000);
var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');


// const https = require('https');

// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
//   let data = '';

//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });