let dataset = {
  headers: [],
  rows: [],
  columnTypes: {}
};

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

