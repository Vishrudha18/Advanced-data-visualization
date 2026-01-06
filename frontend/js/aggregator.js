function aggregateData(rows, xKey, yKey) {
  let result = {};

  rows.forEach(row => {
    const xValue = row[xKey];
    const yValue = Number(row[yKey]);

    if (!result[xValue]) {
      result[xValue] = {
        sum: 0,
        count: 0
      };
    }

    result[xValue].sum += yValue;
    result[xValue].count += 1;
  });

  return result;
}

function prepareChartData(aggregationResult) {
  const labels = [];
  const values = [];

  for (let key in aggregationResult) {
    labels.push(key);
    values.push(aggregationResult[key].sum);
  }

  return { labels, values };
}
