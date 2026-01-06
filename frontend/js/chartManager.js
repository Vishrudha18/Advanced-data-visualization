let currentChart = null;

/* =========================
   Smooth Animation (Tableau-like)
========================= */
const smoothAnimation = {
  animation: {
    duration: 1200,
    easing: "easeOutQuart"
  },
  animations: {
    x: {
      duration: 1200,
      easing: "easeOutQuart"
    },
    y: {
      duration: 1200,
      easing: "easeOutQuart",
      from: 0
    }
  },
  transitions: {
    active: {
      animation: {
        duration: 400,
        easing: "easeOutCubic"
      }
    },
    resize: {
      animation: {
        duration: 600,
        easing: "easeOutQuart"
      }
    }
  }
};

/* =========================
   Export Background Plugin
========================= */
const backgroundPlugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext("2d");
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = document.body.classList.contains("dark")
      ? "#020617"
      : "#ffffff";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

/* =========================
   Helper: Check categorical X-axis
========================= */
function isCategorical(labels) {
  return labels.some(val => isNaN(Number(val)));
}

/* =========================
   Render Chart
========================= */
function renderChart(labels, values, chartType, yLabel) {
  const emptyMsg = document.getElementById("emptyMessage");
  if (emptyMsg) emptyMsg.style.display = "none";

  const canvas = document.getElementById("chartCanvas");
  const ctx = canvas.getContext("2d");

  if (!labels || !values || labels.length === 0 || values.length === 0) {
    return;
  }

  if (currentChart) {
    currentChart.destroy();
  }

  if (chartType === "bubble" && isCategorical(labels)) {
    alert("Bubble chart works best with numeric X-axis");
    return;
  }

  /* =========================
     Common Options
  ========================= */
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,

    ...smoothAnimation,

    interaction: {
      mode: "nearest",
      intersect: false
    },
    hover: {
      animationDuration: 300
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#475569"
        }
      }
    },
    scales: {
      x: {
        ticks: { color: "#475569" },
        grid: { display: false }
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#475569" },
        grid: { color: "rgba(0,0,0,0.05)" }
      }
    }
  };

  /* =========================
     Scatter Chart
  ========================= */
  if (chartType === "scatter") {
    currentChart = new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: [{
          label: yLabel || "Scatter Data",
          data: values.map((v, i) => ({ x: i + 1, y: v })),
          backgroundColor: "rgba(54,162,235,0.7)"
        }]
      },
      options: commonOptions,
      plugins: [backgroundPlugin]
    });
    return;
  }

  /* =========================
     Bubble Chart
  ========================= */
  if (chartType === "bubble") {
    const bubbleData = values.map((v, i) => ({
      x: i + 1,
      y: v,
      r: Math.sqrt(v) * 2
    }));

    currentChart = new Chart(ctx, {
      type: "bubble",
      data: {
        datasets: [{
          label: yLabel || "Bubble Data",
          data: bubbleData,
          backgroundColor: "rgba(255,99,132,0.6)",
          borderColor: "rgba(255,99,132,1)"
        }]
      },
      options: commonOptions,
      plugins: [backgroundPlugin]
    });
    return;
  }

  /* =========================
     Stacked Bar Chart
  ========================= */
  if (chartType === "stackedBar") {
    currentChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: yLabel || "Values",
          data: values,
          backgroundColor: "rgba(75,192,192,0.7)",
          borderRadius: 6
        }]
      },
      options: {
        ...commonOptions,
        scales: {
          x: { stacked: true },
          y: { stacked: true }
        }
      },
      plugins: [backgroundPlugin]
    });
    return;
  }

  /* =========================
     Default Charts
  ========================= */
  currentChart = new Chart(ctx, {
    type: chartType,
    data: {
      labels: labels,
      datasets: [{
        label: yLabel || "Values",
        data: values,
        borderColor: "#ef4444",
        backgroundColor:
          chartType === "line"
            ? "rgba(239,68,68,0.25)"
            : [
                "rgba(239,68,68,0.6)",
                "rgba(59,130,246,0.6)",
                "rgba(234,179,8,0.6)",
                "rgba(34,197,94,0.6)",
                "rgba(168,85,247,0.6)",
                "rgba(249,115,22,0.6)"
              ],
        fill: chartType === "line",
        tension: chartType === "line" ? 0.4 : 0,
        borderWidth: 2,
        pointRadius: chartType === "line" ? 5 : 0,
        pointHoverRadius: chartType === "line" ? 8 : 0,
        hoverBackgroundColor: "rgba(59,130,246,0.85)"
      }]
    },
    options:
      chartType === "pie" ||
      chartType === "doughnut" ||
      chartType === "polarArea"
        ? {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              animateRotate: true,
              duration: 1200,
              easing: "easeOutQuart"
            },
            plugins: {
              legend: {
                position: "top"
              }
            }
          }
        : commonOptions,
    plugins: [backgroundPlugin]
  });
}
