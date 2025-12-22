if (localStorage.getItem("loggedIn") !== "true") {
    alert("Please login first!");
    window.location.href = "login.html";
}
import { displayTodos } from "./displayTodos.js";
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
        displayTodos(data);
    })
    .catch(err => console.log(err));
