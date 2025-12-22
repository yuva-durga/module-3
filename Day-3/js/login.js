const form = document.getElementById("loginForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!savedUser) {
        alert("No user found. Please signup first.");
        return;
    }
    if (email === savedUser.email && password === savedUser.password) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "todos.html";
    } else {
        alert("Incorrect details");
    }
});
