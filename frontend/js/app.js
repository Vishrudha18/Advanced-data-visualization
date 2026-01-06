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
   SAVE DASHBOARD (BACKEND)
========================= */
const saveBtn = document.getElementById("saveDashboardBtn");

if (saveBtn) {
  saveBtn.addEventListener("click", async () => {
    const xAxis = document.getElementById("xAxis").value;
    const yAxis = document.getElementById("yAxis").value;
    const chartType = document.getElementById("chartType").value;
    const fileInput = document.getElementById("datasetInput");

    if (!fileInput.files.length) {
  alert("Please upload a dataset first.");
  return;
}

if (!currentChart) {
  alert("Please generate a chart before saving.");
  return;
}


    const config = {
      chartType,
      labels: currentChart.data.labels,
      values: currentChart.data.datasets[0].data,
      xAxis,
      yAxis
    };

    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5003/api/dashboard/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        name: `${yAxis} vs ${xAxis}`,
        config
      })
    });

    if (!res.ok) {
      alert("Failed to save dashboard");
      return;
    }

    alert("Dashboard saved successfully!");
  });
}


/* =========================
   LOAD DASHBOARD FROM BACKEND
========================= */
const params = new URLSearchParams(window.location.search);
const dashboardId = params.get("id");

if (dashboardId && localStorage.getItem("token")) {
  loadDashboard(dashboardId);
}


async function loadDashboard(id) {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`http://localhost:5003/api/dashboard/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!res.ok) return;

    const dashboard = await res.json();
    const { chartType, labels, values, xAxis, yAxis } = dashboard.config;

    document.getElementById("chartType").value = chartType;
    document.getElementById("xAxis").value = xAxis;
    document.getElementById("yAxis").value = yAxis;

    renderChart(labels, values, chartType, yAxis);

  } catch (err) {
    console.warn("Backend not available, skipping dashboard load");
  }
}

document.getElementById("exportChartBtn").addEventListener("click", () => {
  if (!currentChart) {
    alert("No chart to export!");
    return;
  }

  // Convert chart to image
  const imageURL = currentChart.toBase64Image("image/png", 1);

  // Create download link
  const link = document.createElement("a");
  link.href = imageURL;
  link.download = "chart.png";
  link.click();
});


