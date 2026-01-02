const fileInput = document.getElementById("datasetInput");

fileInput.addEventListener("change", handleFileUpload);

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => parseCSV(e.target.result);
  reader.readAsText(file);
}

function parseCSV(text) {
  const lines = text.trim().split("\n");

  const headers = lines[0].split(",").map(h => h.trim());

  const rows = lines.slice(1).map(line => {
    const values = line.split(",");
    let rowObj = {};

    headers.forEach((header, index) => {
      rowObj[header] = values[index]?.trim();
    });

    return rowObj;
  });

  dataset.headers = headers;
  dataset.rows = rows;

  console.log("Dataset Loaded:", dataset);
}
