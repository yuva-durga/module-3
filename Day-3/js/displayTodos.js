export function displayTodos(data) {
    const container = document.getElementById("todos");
    container.innerHTML = "";

    data.slice(0, 20).forEach(todo => {
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.margin = "10px";
        div.style.padding = "10px";

        div.innerHTML = `
            <h3>${todo.title}</h3>
            <p>Status: ${todo.completed ? "Completed" : "Pending"}</p>
        `;

        container.appendChild(div);
    });
}
