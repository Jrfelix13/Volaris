
    var data = [{
      type: "pie",
      values: [2, 3, 4, 4],
      labels: ["A", "B", "C", "E"],
      textinfo: "label+percent",
      insidetextorientation: "radial"
      }]

    var layout = [{
      height: 700,
      width: 700
      }]

    Plotly.newPlot('myDiv', data, layout)
