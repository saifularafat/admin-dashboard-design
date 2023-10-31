const orderBarChart = {
    series: [{
        data: [1100,8000,2000,1000,3000]
      },
      {
        data: [1300,1300,1300,1300,1300]
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
        xaxis:{
            labels:{
                show: false
            },
            axisBorder:{
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
        grid:{
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
        toolbar:{
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
      xaxis:{
        labels:{
            show: false
        },
        axisBorder:{
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

export {orderBarChart, profitLineChart}