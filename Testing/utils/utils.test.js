const utils=require('./utils');
const expect=require('expect');


it('should add ',()=>{
var res=utils.add(33,11);
expect(res).toBe(44).toBeA('number');
// if(res==44)
// throw new Error("Wrong value");
});
it('array ',()=>{
expect({name:'achu',age:22}).toInclude({name:'achu'})
});

it('should add2 ',(done)=>{
utils.asyncAdd(33,11,(sum)=>{
expect(sum).toBe(44).toBeA('number');
done();
});
});


