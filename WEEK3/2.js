
const parentTodo=document.querySelector(".todos")


function deleteTodo(id){

    let idd="todo-"+id;
    let todo=document.getElementById(idd)
    todo.parentNode.removeChild(todo)
    // console.log(todo)
}


let counter=1;;
function createTodo(){
    let todo=document.createElement("div");
    todo.setAttribute("id","todo-"+counter)
    let todo_description=document.querySelector("input").value;
    todo.innerHTML=`<h1>${todo_description}</h1> <button onClick="deleteTodo(${counter})">delete</button>`;
    parentTodo.appendChild(todo)


}
