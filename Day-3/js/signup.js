const form = document.getElementById("signupForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Go to login page.");
});
