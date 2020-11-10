/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Dec',
        'Nov',
        'Jan',
        'Feb',
        'Mar'
      ],
      datasets: [{
        data: [
          8440,
          10066,
          6985,
          1334,
          1621
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#ff00bf',
        borderWidth: 4,
        pointBackgroundColor: '#ff00bf'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}())
