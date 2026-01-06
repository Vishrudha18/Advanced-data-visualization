// ================= LOGIN =================
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await fetch("http://localhost:5003/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // ✅ Store ONLY token
      localStorage.setItem("token", data.token);

      window.location.href = "pages/home.html";

    } catch (err) {
      alert("Server error");
    }
  });
}

// ================= REGISTER =================
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
  registerBtn.addEventListener("click", async () => {
    const name = document.getElementById("regName")?.value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5003/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Registration successful! Please login.");
      window.location.href = "../index.html";

    } catch (err) {
      alert("Server error");
    }
  });
}

// ================= LOGOUT =================
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    const token = localStorage.getItem("token");

    if (token) {
      logoutBtn.classList.remove("hidden");
    }

    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      window.location.href = "../index.html";
    });
  }
});

// Redirect if already logged in
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (token && window.location.pathname.endsWith("index.html")) {
    window.location.href = "pages/home.html";
  }
});

