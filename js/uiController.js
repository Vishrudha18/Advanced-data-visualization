const xAxisSelect = document.getElementById("xAxis");
const yAxisSelect = document.getElementById("yAxis");
const chartTypeSelect = document.getElementById("chartType");

console.log("uiController loaded");

function populateAxisDropdowns(headers, columnTypes) {
  console.log("Populating dropdowns", headers, columnTypes);

  xAxisSelect.innerHTML = "";
  yAxisSelect.innerHTML = "";

  headers.forEach(header => {
    const xOption = document.createElement("option");
    xOption.value = header;
    xOption.textContent = header;
    xAxisSelect.appendChild(xOption);

    if (columnTypes[header] === "numeric") {
      const yOption = document.createElement("option");
      yOption.value = header;
      yOption.textContent = header;
      yAxisSelect.appendChild(yOption);
    }
  });

  if (xAxisSelect.options.length > 0) xAxisSelect.selectedIndex = 0;
  if (yAxisSelect.options.length > 0) yAxisSelect.selectedIndex = 0;

  // Auto-render first chart
  updateChart();
}

function updateChart() {
  if (!dataset || !dataset.rows || dataset.rows.length === 0) return;

  const xKey = xAxisSelect.value;
  const yKey = yAxisSelect.value;
  const chartType = chartTypeSelect.value;

  if (!xKey || !yKey || xKey === yKey) return;

  const emptyMessage = document.getElementById("emptyMessage");
  if (emptyMessage) emptyMessage.style.display = "none";

  const aggregated = aggregateData(dataset.rows, xKey, yKey);
  const chartData = prepareChartData(aggregated);

  renderChart(
    chartData.labels,
    chartData.values,
    chartType,
    `${yKey} by ${xKey}`
  );
}

xAxisSelect.addEventListener("change", updateChart);
yAxisSelect.addEventListener("change", updateChart);
chartTypeSelect.addEventListener("change", updateChart);
