/*
For more info about chart.js visit the website - 
Chart.js | Open source HTML5 Charts for your website
https://www.chartjs.org
*/
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Revenue first 6 month',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1000000, 890000, 690000, 880000, 705000, 980000]
        }]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: 'Omsætning'
        }
    },
      legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'blue'
            }
        }
        
});