// function sum(a,b){
//     return a+b;
// }

// let ans=sum("3",4);
// console.log(ans);



function summ(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}

console.log(summ(5))