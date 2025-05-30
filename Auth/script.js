const validEmail = "ddap@gmail.com";
const validPassword = "ddap12345";

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (email === validEmail && password === validPassword) {
        window.location.href = "../index.html";
    } else {
        errorMessage.textContent = "Email atau Password salah!";
    }
});