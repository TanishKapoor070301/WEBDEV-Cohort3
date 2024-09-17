const fs=require("fs");

const content=fs.readFileSync("a.txt");
console.log(content);

console.log("hello")


const content1=fs.readFileSync("b.txt","utf-8");
console.log(content1);