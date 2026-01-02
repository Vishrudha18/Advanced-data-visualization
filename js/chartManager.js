let currentChart = null;

function renderChart(labels, values, chartType) {
  const ctx = document.getElementById("chartCanvas").getContext("2d");

  if (currentChart) {
    currentChart.destroy();
  }

  currentChart = new Chart(ctx, {
    type: chartType,
    data: {
      labels: labels,
      datasets: [{
        label: "Value",
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
