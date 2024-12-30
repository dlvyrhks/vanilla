const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // console.log(event);
    // console.dir(event.target);
    // console.log(event.target.parentElement);
    // console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    // console.log(li.id);
    li.remove();
    console.log(typeof li.id)
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(saveToDos);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // console.log.apply(parsedToDos);
    // parsedToDos.forEach(sayHello);
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    parsedToDos.forEach(paintToDo);
}



// ------------------------------------------------------

// JSON.stringify는 object나 array나 어떤 것이든 string으로 바꿔준다.

// const player = {name:"nico"};
// JSON.stringify(player)
// "{\"name\":\"nico\"}"



// JSON.stringify([1, 2, 3, 4]);
// "[1,2,3,4]"
// JSON.parse("[1,2,3,4]")
// [1, 2, 3, 4]

// ------------------------------------------------------

// function sexyFilter() {

// }

// [1, 2, 3, 4].filter(sexyFilter)

// sexyFilter(1) = 1
// sexyFilter(2) = 2
// sexyFilter(3) = 3
// sexyFilter(4) = 4

// ------------------------------------------------------

// function sexyFilter(item) {
//     return item !== 3
// }

// [1, 2, 3, 4, 5].filter(sexyFilter)
// [1, 2, 4, 5]

// ------------------------------------------------------

// const arr = ["pizza", "banana", "tomato"]
// function sexyFilter(food) {
//     return food !== "banana"
// }

// arr.filter(sexyFilter)
// ["pizza", "tomato"]

// ------------------------------------------------------

// const arr = [1234, 5454, 223, 122, 45, 6775, 334];

// function sexyFilter(potato) {
//     return potato <= 1000
// }

// arr.filter(sexyFilter)

// [223, 122, 45, 334];

// ------------------------------------------------------
