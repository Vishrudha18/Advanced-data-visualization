const xAxisSelect = document.getElementById("xAxis");
const yAxisSelect = document.getElementById("yAxis");
const chartTypeSelect = document.getElementById("chartType");

console.log("uiController loaded");

/* =========================
   Populate Axis Dropdowns
========================= */
function populateAxisDropdowns(headers, columnTypes) {
  console.log("Populating dropdowns", headers, columnTypes);

  xAxisSelect.innerHTML = "";
  yAxisSelect.innerHTML = "";

  headers.forEach(header => {
    // X-axis (all columns)
    const xOption = document.createElement("option");
    xOption.value = header;
    xOption.textContent = header;
    xAxisSelect.appendChild(xOption);

    // Y-axis (only numeric)
    if (columnTypes[header] === "numeric") {
      const yOption = document.createElement("option");
      yOption.value = header;
      yOption.textContent = header;
      yAxisSelect.appendChild(yOption);
    }
  });

  if (xAxisSelect.options.length > 0) {
    xAxisSelect.selectedIndex = 0;
  }

  if (yAxisSelect.options.length > 0) {
    yAxisSelect.selectedIndex = 0;
  }

  // Auto render first chart
  updateChart();
}

/* =========================
   Update Chart
========================= */
window.updateChart = function () {
  const xKey = xAxisSelect.value;
  const yKey = yAxisSelect.value;
  const chartType = chartTypeSelect.value;

  if (!xKey || !yKey || !dataset?.rows) return;

  const aggregated = aggregateData(dataset.rows, xKey, yKey);
  const chartData = prepareChartData(aggregated);

  renderChart(
    chartData.labels,
    chartData.values,
    chartType,
    `${yKey} by ${xKey}`
  );
};


/* =========================
   Event Listeners
========================= */
xAxisSelect.addEventListener("change", updateChart);
yAxisSelect.addEventListener("change", updateChart);
chartTypeSelect.addEventListener("change", updateChart);
