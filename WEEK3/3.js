let counter=1;


function deleteTodo(idd){
    let todomain=document.querySelector("#todos");

    let todelete=document.getElementById("todo-"+idd);

    todelete.parentNode.removeChild(todelete)
}

function addTodo(){

    let todomain=document.querySelector("#todos");

    let newTodo=document.createElement("div");
    newTodo.setAttribute("id","todo-"+counter);


    let desc=document.querySelector("input").value;

    let spann=document.createElement("span");
    spann.innerHTML=desc;
    newTodo.appendChild(spann);

    let buttonn=document.createElement("button");
    buttonn.innerHTML="Delete Todo";
    newTodo.appendChild(buttonn);
    buttonn.addEventListener("click",(e)=>{
        console.log(e);
        deleteTodo(`${counter}`);
    })

    todomain.appendChild(newTodo)
}