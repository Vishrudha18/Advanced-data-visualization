let currentChart = null;

function renderChart(labels, values, chartType, yLabels) {
  const emptyMessage = document.getElementById("emptyMessage");
  const ctx = document.getElementById("chartCanvas").getContext("2d");

  if (labels.length === 0 || values.length === 0) return;

  // Hide empty message only when rendering chart
  if (emptyMessage) emptyMessage.style.display = "none";

  if (currentChart) {
    currentChart.destroy();
  }

  currentChart = new Chart(ctx, {
    type: chartType,
    data: {
      labels: labels,
      datasets: [{
        label: yLabels,
        data: values,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}
