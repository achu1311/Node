const request=require('supertest');
var app=require('./server.js').app;
var expect=require('expect');
it('Hello',(done)=>{

request(app).get('/').expect(400).expect((res)=>{
expect(res.body).toInclude({error:'Not Found'})
}).end(done);

})
