//Promisified version of setTimeout

function print(){
    return "Hello promisified SetTimeOut"
}

let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(print())
    },2000);
})

p.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("Error:",error)
})
