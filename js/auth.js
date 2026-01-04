const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "index.html";
  });
}

const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some(u => u.email === email);
    if (exists) {
      alert("User already exists");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");
    window.location.href = "login.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (logoutBtn && currentUser) {
    logoutBtn.classList.remove("hidden");

    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("currentUser");
      window.location.href = "login.html";
    });
  }
});
