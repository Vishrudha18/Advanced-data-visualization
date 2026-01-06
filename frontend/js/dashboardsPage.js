document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.querySelector(".dashboard-grid");
  if (!grid) return;

  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "../index.html";
    return;
  }

  try {
    const res = await fetch("http://localhost:5003/api/dashboard/my", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!res.ok) {
      throw new Error("Unauthorized");
    }

    const dashboards = await res.json();

    if (dashboards.length === 0) {
      grid.innerHTML = `
        <div class="dashboard-card empty">
          <span>📊</span>
          <p>No dashboards saved yet</p>
          <a href="visualize.html" class="dashboard-btn">Create Dashboard</a>
        </div>
      `;
      return;
    }

    grid.innerHTML = dashboards.map(db => `
      <div class="dashboard-card">
        <div class="dashboard-preview">📊</div>

        <h3>${db.name}</h3>
        <p>${db.config.chartType.toUpperCase()}</p>

        <div class="dashboard-actions">
          <a href="visualize.html?id=${db._id}" class="dashboard-btn">Open</a>
          <button class="rename-btn" data-id="${db._id}">Rename</button>
          <button class="delete-btn" data-id="${db._id}">Delete</button>
        </div>
      </div>
    `).join("");

    /* ========== RENAME ========= */
    document.querySelectorAll(".rename-btn").forEach(btn => {
      btn.addEventListener("click", async () => {
        const id = btn.dataset.id;
        const newName = prompt("Enter new dashboard name:");

        if (!newName || !newName.trim()) return;

        await fetch(`http://localhost:5003/api/dashboard/update/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({ name: newName.trim() })
        });

        location.reload();
      });
    });

    /* ========== DELETE ========= */
    document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", async () => {
        const id = btn.dataset.id;

        await fetch(`http://localhost:5003/api/dashboard/delete/${id}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        location.reload();
      });
    });

  } catch (err) {
    alert("Session expired. Please login again.");
    localStorage.removeItem("token");
    window.location.href = "../index.html";
  }
});
