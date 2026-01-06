function getDashboards() {
  return JSON.parse(localStorage.getItem("dashboards")) || [];
}

function saveDashboard(config) {
  const dashboards = getDashboards();

  // Prevent duplicate save (optional safety)
  const exists = dashboards.some(d => d.id === config.id);
  if (exists) return;

  dashboards.push(config);
  async function saveDashboard(name, config) {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5003/api/dashboard/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ name, config })
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.message || "Save failed");
    return;
  }

  alert("Dashboard saved successfully");
}

}

function deleteDashboard(id) {
  const dashboards = getDashboards().filter(d => d.id !== id);
  localStorage.setItem("dashboards", JSON.stringify(dashboards));
}

function generateId() {
  return "db_" + Date.now();
}

function renameDashboard(id, newName) {
  const dashboards = getDashboards().map(d => {
    if (d.id === id) {
      return { ...d, name: newName };
    }
    return d;
  });

  localStorage.setItem("dashboards", JSON.stringify(dashboards));
}
