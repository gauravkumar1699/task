 
let MyPromise = require('./concept');


let p = new MyPromise((resolve,reject)=>{
    var a  = 1+3;
    if(a===4){
        resolve('Success');
    }else{
        reject('failure');
    }
})

p.then((msg)=>{
    console.log("This is then and = " + msg);
}).catch((msg)=>{
    console.log("This is catch and  = " + msg);
})
