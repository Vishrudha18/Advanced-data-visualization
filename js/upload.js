const uploadInput = document.getElementById("uploadInput");
const fileInfo = document.getElementById("fileInfo");
const fileName = document.getElementById("fileName");
const fileSize = document.getElementById("fileSize");
const fileColumns = document.getElementById("fileColumns");
const continueBtn = document.getElementById("continueBtn");

if (uploadInput) {
  uploadInput.addEventListener("change", () => {
    const file = uploadInput.files[0];
    if (!file) return;

    fileName.textContent = file.name;
    fileSize.textContent = (file.size / 1024).toFixed(2) + " KB";

    // Read file for preview
    const reader = new FileReader();
    reader.onload = () => {
      let columns = [];

      if (file.name.endsWith(".csv")) {
        const firstLine = reader.result.split("\n")[0];
        columns = firstLine.split(",");
      } else {
        const json = JSON.parse(reader.result);
        columns = Object.keys(json[0] || {});
      }

      fileColumns.textContent = columns.join(", ");
      fileInfo.classList.remove("hidden");
      continueBtn.classList.remove("disabled");
    };

    reader.readAsText(file);
  });
}
