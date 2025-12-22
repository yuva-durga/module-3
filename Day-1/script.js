async function loadTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    const first20 = data.slice(0, 20);
    localStorage.setItem("todos", JSON.stringify(first20));
    renderTodos();
}
function getTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    return todos;
}
function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(id) {
    const todos = getTodos();
    const updated = todos.filter(todo => todo.id !== id);
    saveTodos(updated);
    renderTodos();
}
function toggleStatus(id) {
    const todos = getTodos();
    const updated = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos(updated);
    renderTodos();
}
function renderTodos() {
    const todoList = document.getElementById("todo-list");
    const emptyMessage = document.getElementById("empty");
    const todos = getTodos();
    todoList.innerHTML = "";
    emptyMessage.innerHTML = "";

    if (todos.length === 0) {
        emptyMessage.innerText = "No Todos Available";
        return;
    }

    todos.forEach(todo => {
        const div = document.createElement("div");
        div.className = "todo";
        if (todo.completed) div.classList.add("completed");
        div.innerHTML = `
            <span>${todo.title}</span>
            <div>
                <button onclick="toggleStatus(${todo.id})">
                    ${todo.completed ? "Undo" : "Complete"}
                </button>
                <button onclick="deleteTodo(${todo.id})" style="background:red;color:white">
                    Delete
                </button>
            </div>
        `;
        todoList.appendChild(div);
    });
}

renderTodos();
