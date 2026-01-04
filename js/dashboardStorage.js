function getDashboards() {
  return JSON.parse(localStorage.getItem("dashboards")) || [];
}

function saveDashboard(config) {
  const dashboards = getDashboards();

  // Prevent duplicate save (optional safety)
  const exists = dashboards.some(d => d.id === config.id);
  if (exists) return;

  dashboards.push(config);
  localStorage.setItem("dashboards", JSON.stringify(dashboards));
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
