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
    data: [260, 90, 130, 145, 210, 150, 220, 160]
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

const budgetDashesLineChart = {
  series1: [{
    name: "Session Duration",
    data: [23, 20, 25, 22, 23, 19, 26, 22, 21.6, 18, 23]
  },
  {
    name: "Page Views",
    data: [17, 14, 19, 16, 17, 13, 20, 14, 14.8, 12, 17]
  },
  ],
  series2: [{
    data: [14, 16, 18, 16, 15, 18, 17, 19, 16]
  },
  {
    data: [11, 13, 15, 13, 12, 15, 14, 16, 13]
  }
  ],
  series3: [{
    data: [20, 22, 25, 23, 24, 21, 22, 20, 22]
  },
  {
    data: [16, 18, 21, 19, 20, 17, 18, 16, 18]
  }
  ],
  options: {
    colors: ['#2563eb', '#d8d8d8'],
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [2, 1.2],
      curve: 'smooth',
      dashArray: [0, 5]
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
      show: false,
    }
  },
}

const browserRadialBarChart = {
  series1: [51],
  series2: [17.3],
  series3: [12.4],
  series4: [11.2],
  series5: [8.1],

  options: {
    colors1: ['#e44444'],
    colors2: ['#9453F8'],
    colors3: ['#2299F8'],
    colors4: ['#E53333'],
    colors5: ['#00BBF5'],
    stroke: {
      lineCap: "round"
    },
    grid: {
      padding: {
        top: -15,
        bottom: -15
      }
    },
    chart: {
      height: 250,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        track: {
          background: '#ebebeb',
        },
        hollow: {
          size: '23%'
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      },
    },
  },
}

const globalAngleChart = {
  series: [89],
  options: {
    stroke: {
      lineCap: "round"
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#df3636", "#ee7a7a"],
        stops: [0, 100]
      }
    },
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        track: {
          background: '#ebebeb',
          strokeWidth: '55%',
        },
        offsetY: 0,
        startAngle: -155,
        endAngle: 155,
        hollow: {
          margin: 10,
          size: '75%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: '34px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500,
            color: "#6b6b6b",
          }
        }
      }
    },
    colors: ['#ee7a7a'],
  },
}

const revenueGeneratedAreaChart = {
  seriesSpark3: [{
    data: [2, 5, 2, 6, 9, 5, 9, 11]
  }],
  optionsSpark3: {
    chart: {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 0.1
    },
    xaxis: {
      crosshairs: {
        width: 0
      },
    },
    yaxis: {
      min: 0
    },
  },
};

const earningReportBarChart = {
  series: [{
    data: [5, 7, 4, 10, 7, 6, 3]
  }],
  options: {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Fr', 'Sa', 'Su', 'Mo', 'Tu', 'Wn', 'Th'
      ],
    }
  },
};

const supportTicketRadialBar = {
  series: [87],
  options: {
    chart: {
      height: 350,
      type: 'radialBar',
      offsetY: -10
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: 120
          },
          value: {
            offsetY: 76,
            fontSize: '22px',
            color: undefined,
            formatter: function (val) {
              return val + "%";
            }
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
      },
    },
    stroke: {
      dashArray: 4
    },
    labels: ['Completed Task'],
  },
};

// const totalEarningDoubleBarChart = {
//   series: [{
//     data: [160, 90, 130, 145, 110, 150, 120, 140]
//   },
//   {
//     data: [-70, -110, -110, -105, -50, -90, -100, -60]
//   }
//   ],
//   options: {
//     legend: {
//       show: false,
//     },
//     chart: {
//       type: 'bar',
//       stacked: true,
//       toolbar: {
//         show: false
//       }
//     },
//     colors: ['#2563eb', '#fb923c'],
//     plotOptions: {
//       bar: {
//         borderRadius: [10, 10],
//         columnWidth: '52%',
//       },
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       width: 8,
//       colors: ["#fff"]
//     },

//     grid: {
//       show: false,
//     },
//     xaxis: {
//       categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
//       axisBorder: {
//         show: false
//       },
//       labels: {
//         style: {
//           colors: ['#6e6b7b'],
//           fontSize: '12px',
//           fontFamily: 'Montserrat, sans-serif',
//           fontWeight: 400,
//           cssClass: 'apexcharts-xaxis-label',
//         }
//       }
//     },
//     yaxis: {
//       min: -200,
//       max: 300,
//       tickAmount: 5,
//       labels: {
//         formatter: function (y) {
//           return y.toFixed(0);
//         },
//         style: {
//           colors: ['#6e6b7b'],
//           fontSize: '12px',
//           fontFamily: 'Montserrat, sans-serif',
//           fontWeight: 400,
//           cssClass: 'apexcharts-xaxis-label',
//         }
//       }
//     },
//     tooltip: {
//       enabled: false,
//     },
//     responsive: [
//       {
//         breakpoint: 500,
//         options: {
//           plotOptions: {
//             bar: {
//               columnWidth: '72%',
//             },
//           },
//         }
//       },
//       {
//         breakpoint: 360,
//         options: {
//           plotOptions: {
//             bar: {
//               columnWidth: '100%',
//             },
//           },
//         }
//       },
//     ]
//   }
// }
const totalEarningDoubleBarChart = {
  series: [{
    data: [70, 30, 120, 80, 60, 40, 50, 80]
  },
  {
    data: [-30, -90, -20, -40, -55, -80, -70, -40]
  }
  ],
  options: {
    legend: {
      show: false,
    },
    chart: {
      type: 'bar',
      stacked: true,
    },
    colors: ['#12FF98', '#8E7987'],
    plotOptions: {
      bar: {
        borderRadius: [20, 20],
        columnWidth: '42%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 8,
    },

    grid: {
      show: false,
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

export {
  orderBarChart,
  profitLineChart,
  earningPieChart,
  revenueDoubleBarChart,
  budgetDashesLineChart,
  browserRadialBarChart,
  globalAngleChart,
  revenueGeneratedAreaChart,
  earningReportBarChart,
  supportTicketRadialBar,
  totalEarningDoubleBarChart
}