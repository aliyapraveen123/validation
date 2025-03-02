
function showLogin() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}


function showSignup() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}


function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password);
}

function isValidPhone(phone) {
    return /^\d{10}$/.test(phone);
}

function signup() {
    let username = document.getElementById("signup-username").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let phone = document.getElementById("signup-phone").value;

    if (!isValidEmail(email)) {
        alert("Invalid email format!");
        return;
    }

    if (!isValidPassword(password)) {
        alert("Password must include uppercase, lowercase, number, and special character.");
        return;
    }

    if (!isValidPhone(phone)) {
        alert("Phone number must be 10 digits.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
        alert("Email already registered! Please log in.");
        return;
    }
    users.push({ username, email, password, phone });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! You can now log in.");
    showLogin();
let newUser = { username, email, password, phone };
users.push(newUser);
localStorage.setItem("users", JSON.stringify(users));

alert("Signup successful! You can now log in.");
showLogin();

}
function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        alert("Login successful! Redirecting...");

        localStorage.setItem("loggedInUser", JSON.stringify(validUser));

        window.location.href = "https://steady-medovik-71a941.netlify.app/";``
        alert("Invalid email or password!");
    }
}
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("You have logged out successfully.");
    window.location.href = "index.html";
}
