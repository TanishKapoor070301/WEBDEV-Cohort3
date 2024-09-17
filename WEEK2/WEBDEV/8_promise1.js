function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration)
    })
}

function callback(){
    console.log("1 sec has been passed")
}

// setTimeoutPromisified(1000).then(callback)



    // logs hi after 1 second

    // logs hello 3 seconds after step 1

    // logs hello there 5 seconds after step 2


//good sytax
/*
setTimeoutPromisified(1000).then(()=>{
    console.log("hii");
    setTimeoutPromisified(3000).then(()=>{
        console.log("Hello");
        setTimeoutPromisified(5000).then(()=>{
            console.log("hello there")
        })
    })
})
*/



//promise chaining
// setTimeoutPromisified(1000).then(()=>{
//     console.log("hii");
//     return setTimeoutPromisified(3000)
// }).then(()=>{
//     console.log("helo");
//     return setTimeoutPromisified(5000);
// }).then(()=>{
//     console.log("hello world")
// })



//ugly callback hell

// setTimeout(()=>{
//     console.log("hi");

//     setTimeout(()=>{
//         console.log("hello");

//         setTimeout(()=>{
//             console.log("hello there")
//         },5000)
//     },3000)
// },1000)


async function solve(){
    await setTimeoutPromisified(1000);
    console.log("HI");
    await setTimeoutPromisified(3000);
    console.log("Hello");
    await setTimeoutPromisified(5000);
    console.log("Hello World");

}

solve()
console.log("async await")