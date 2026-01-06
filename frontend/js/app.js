let dataset = {
  headers: [],
  rows: [],
  columnTypes: {}
};

let openedDashboard = null;


/* =========================
   THEME TOGGLE (SAFE)
========================= */
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }
}

/* =========================
   SAVE DASHBOARD
========================= */
const saveBtn = document.getElementById("saveDashboardBtn");

if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    const xAxis = document.getElementById("xAxis").value;
    const yAxis = document.getElementById("yAxis").value;
    const chartType = document.getElementById("chartType").value;
    const fileInput = document.getElementById("datasetInput");

    if (!xAxis || !yAxis || !fileInput.files.length) {
      alert("Please upload data and select axes before saving.");
      return;
    }

    const dashboard = {
      id: generateId(),
      name: `${yAxis} vs ${xAxis}`,
      chartType,
      xAxis,
      yAxis,
      datasetName: fileInput.files[0].name,
      createdAt: new Date().toLocaleString()
    };

    saveDashboard(dashboard);
    alert("Dashboard saved successfully!");
  });
}

/* =========================
   LOAD SAVED DASHBOARD
========================= */
const params = new URLSearchParams(window.location.search);
const dashboardId = params.get("id");

if (dashboardId) {
  const dashboards = JSON.parse(localStorage.getItem("dashboards")) || [];
  openedDashboard = dashboards.find(d => d.id === dashboardId);

  if (openedDashboard) {
    document.getElementById("chartType").value = openedDashboard.chartType;
  }
}

const exportBtn = document.getElementById("exportChartBtn");

if (exportBtn) {
  exportBtn.addEventListener("click", () => {
    const canvas = document.getElementById("chartCanvas");

    if (!canvas) {
      alert("No chart available to export.");
      return;
    }

    const imageURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "dashboard-chart.png";
    link.click();
  });
}
