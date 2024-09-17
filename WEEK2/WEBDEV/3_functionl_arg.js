function sum(a,b){
    return a+b;
}

function diff(a,b){
    return a-b;
}

function doOp(a,b,op){
    return op(a,b);
}

let ans=doOp(4,1,diff);
console.log(ans);