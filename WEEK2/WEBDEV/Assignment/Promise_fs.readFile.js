//fs.readfile promisified version
const fs=require("fs");


const p=new Promise((resolve,reject)=>{
    fs.readFile("../a.txt","utf-8",(error,data)=>{
        if(error){
            console.log("Error:",error);
        }
        else{
            resolve(data)
        }
    })
})

p.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("Error:",error)
})