function detectColumnTypes(headers, rows) {
  let columnTypes = {};

  headers.forEach(header => {
    let values = rows.map(row => row[header]).filter(v => v !== "");

    let isNumeric = values.every(v => !isNaN(v));
    let isDate = values.every(v => !isNaN(Date.parse(v)));

    if (isNumeric) {
      columnTypes[header] = "numeric";
    } else if (isDate) {
      columnTypes[header] = "date";
    } else {
      columnTypes[header] = "categorical";
    }
  });

  return columnTypes;
}
