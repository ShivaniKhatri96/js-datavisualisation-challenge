(() => {
  const div = document.getElementById("mw-content-text");
  const table = document.getElementById("table1");
  // checking if I found the right location to insert the graph
  const canvas = document.createElement("canvas");
  div.insertBefore(canvas, table);
  const ctx = canvas.getContext("2d");
  const labels = [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
  ];
  const data = {
  labels,
    datasets: [{
      data: [1012.8, 1007.8, 1013.7, 999.4, 1022.8, 1034.4, 1043.6, 1067.3, 1072.0, 1111.0, 1073.8],
      label: "Belgium",
    }]
  }
  const config = {
    type: "line",
    data: data, 
    options: {
      responsive: true,
    }
  }
  const myChart = new Chart(ctx, config);
})();
