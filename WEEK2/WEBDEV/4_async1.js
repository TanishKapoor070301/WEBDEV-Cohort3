const fs=require("fs");

function print(err,data){
    if(err){
        console.log("no file")
    }
    else{
        console.log(data);


    }}

fs.readFile("a.txt","utf-8",print);

fs.readFile("b.txt","utf-8",print);

setTimeout(() => {
    console.log("timeout")
    
}, 3000);

console.log("done")