document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".dashboard-grid");
  if (!grid) return;

  const dashboards = getDashboards();

  if (dashboards.length === 0) {
    grid.innerHTML = `
      <div class="dashboard-card empty">
        <span>📊</span>
        <p>No dashboards saved yet</p>
        <a href="index.html" class="dashboard-btn">Create Dashboard</a>
      </div>
    `;
  } else {
    grid.innerHTML = dashboards.map(db => `
      <div class="dashboard-card">
        <div class="dashboard-preview">📊</div>

        <h3>${db.name}</h3>
        <p>${db.chartType.toUpperCase()} • ${db.datasetName}</p>

        <div class="dashboard-actions">
          <a href="index.html?id=${db.id}" class="dashboard-btn">Open</a>
          <button class="rename-btn" data-id="${db.id}">Rename</button>
          <button class="delete-btn" data-id="${db.id}">Delete</button>
        </div>
      </div>
    `).join("");

    // Rename handler
    document.querySelectorAll(".rename-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const newName = prompt("Enter new dashboard name:");

        if (newName && newName.trim()) {
          renameDashboard(id, newName.trim());
          location.reload();
        }
      });
    });

    // Delete handler
    document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        deleteDashboard(btn.dataset.id);
        location.reload();
      });
    });
  }
});
