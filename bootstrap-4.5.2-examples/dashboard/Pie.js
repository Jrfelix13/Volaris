
    var data = [{
      type: "pie",
      values: [2, 3, 4, 4],
      labels: ["A", "B", "C", "E"],
      textinfo: "label+percent",
      insidetextorientation: "radial",
      marker: {'colors': [
        '#D4A4CA',
        '#DAE498',
        '#72A7D7',
        '#EEF0F0'
       ]}
      }]

    var layout = [{
      height: 700,
      width: 700
      }]

    Plotly.newPlot('myDivP', data, layout)
