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

