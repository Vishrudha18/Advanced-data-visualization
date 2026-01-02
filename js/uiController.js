const xAxisSelect = document.getElementById("xAxis");
const yAxisSelect = document.getElementById("yAxis");

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
}

const chartTypeSelect = document.getElementById("chartType");

function updateChart() {
  const xKey = xAxisSelect.value;
  const yKey = yAxisSelect.value;
  const chartType = chartTypeSelect.value;

  if (!xKey || !yKey) return;

  const aggregated = aggregateData(dataset.rows, xKey, yKey);
  const chartData = prepareChartData(aggregated);

  renderChart(chartData.labels, chartData.values, chartType);
}

xAxisSelect.addEventListener("change", updateChart);
yAxisSelect.addEventListener("change", updateChart);
chartTypeSelect.addEventListener("change", updateChart);


