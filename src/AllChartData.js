const orderBarChart = {
  series: [{
    data: [1100, 8000, 2000, 1000, 3000]
  },
  {
    data: [1300, 1300, 1300, 1300, 1300]
  }],
  options: {
    chart: {
      type: 'bar',
      stacked: true,
      stackType: '100%',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '22%',
      }
    },
    colors: ['#f39c12', '#dfe6e9'],
    dataLabels: {
      enabled: false
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      show: false
    },
  },
}

const profitLineChart = {
  series: [{
    name: "series-1",
    data: [10, 31, 17, 38, 22, 48]
  }],
  options: {
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    colors: ['#00d2d3'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 3.5
    },
    grid: {
      show: true,
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        }
      },
      yaxis: {
        lines: {
          show: false,
        }
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    markers: {
      size: 2.3,
      strokeColors: '#00d2d3',
      colors: '#00d2d3',
      hover: {
        size: 2.3,
        sizeOffset: 3
      },
      discrete: [{
        seriesIndex: 0,
        dataPointIndex: 5,
        fillColor: '#fff',
        strokeColor: '#00d2d3',
        size: 5,
        shape: "circle"
      }],
    }
  },
}

const earningPieChart = {
  series: [29, 53, 18],
  options: {
    stroke: {
      width: 0
    },
    labels: ['Salas', 'Product', 'Service'],
    chart: {
      type: 'donut',
      height: 350
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '12px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              color: "#95a5a6",
              offsetY: 14,
              formatter: function (val) {
                return val
              }
            },
            value: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              color: "#576574",
              offsetY: -16,
              formatter: function (val) {
                return val + "%"
              }
            },
            total: {
              show: true,
              label: 'Product',
              fontSize: '11px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: '#95a5a6',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return "53%"
                }, 0)
              }
            }
          }
        }
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 180
          },
        }
      },
      {
        breakpoint: 350,
        options: {
          chart: {
            height: 120
          },
        }
      },
    ]
  },

}

const revenueDoubleBarChart = {
  series: [{
    data: [ 260, 90, 130, 145, 210, 150, 220, 160]
  },
  {
    data: [-70, -110, -110, -165, -50, -90, -100, -60]
  }
  ],
  options: {
    legend: {
      show: false,
    },
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false
      }
    },
    colors: ['#2563eb', '#fb923c'],
    plotOptions: {
      bar: {
        borderRadius: [10, 10],
        columnWidth: '52%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 8,
      colors: ["#fff"]
    },

    grid: {
      show: false,
    },
    xaxis: {
      categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      axisBorder: {
        show: false
      },
      labels: {
        style: {
          colors: ['#6e6b7b'],
          fontSize: '12px',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        }
      }
    },
    yaxis: {
      min: -200,
      max: 300,
      tickAmount: 5,
      labels: {
        formatter: function (y) {
          return y.toFixed(0);
        },
        style: {
          colors: ['#6e6b7b'],
          fontSize: '12px',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        }
      }
    },
    tooltip: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 500,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '72%',
            },
          },
        }
      },
      {
        breakpoint: 360,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '100%',
            },
          },
        }
      },
    ]
  }
}


export { orderBarChart, profitLineChart, earningPieChart, revenueDoubleBarChart }