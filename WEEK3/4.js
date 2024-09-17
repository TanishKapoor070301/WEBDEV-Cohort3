let todos=[];
let counter=1;
function addTodo(){

    todos.push(
        {
            id:counter,
            title:document.querySelector("input").value
        }
    )
    counter++;

    render();
}

function deleteTodo(id) {
    todos=todos.filter((todo)=>{return todo.id!==id})
    render()
}



function deletelastTodo(){
    todos.splice(todos.length-1,1);
    render();
}


function deletefirstTodo(){
    todos.splice(0,1);
    render();
}

function Componant(todo){

    let newtodo=document.createElement("div");
    newtodo.setAttribute("id",todo.id);

    let desc=document.createElement("span");
    desc.innerHTML=todo.title;

    let buttonn=document.createElement("button");
    buttonn.innerHTML="delete todo";

    newtodo.appendChild(desc);
    newtodo.appendChild(buttonn);

    buttonn.addEventListener("click",()=>{
        deleteTodo(todo.id);
    })

    document.querySelector("#Todos").appendChild(newtodo)

}

function render(){

    document.querySelector("#Todos").innerHTML="";

    console.log(todos);

    todos.map((todo)=>{
        return Componant(todo)
    })

}