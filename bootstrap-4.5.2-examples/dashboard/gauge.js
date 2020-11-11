var data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: 80,
      title: { text: "NPS" },
      type: "indicator",
      mode: "gauge+number",
      delta: { reference: 400 },
      gauge: { axis: { range: [null, 100] } }
    }
  ];
  
  var layout = { width: 600, height: 400 };
  Plotly.newPlot('myDiv', data, layout);