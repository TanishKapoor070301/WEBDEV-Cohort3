//Promisifie version of fetch

const p=new Promise((resolve,reject)=>{
    fetch("https://api.github.com/users/TanishKapoor070301")
    .then((response)=>resolve(response))
    .catch((error)=>reject(error))
})

p.then((value)=>{
    return value.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("Error:",error)
})