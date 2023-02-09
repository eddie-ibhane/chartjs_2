const ctx = document.getElementById('myChart');

const url = "jsonData.json";

async function getData(){
  await fetch(url)
  .then((response) => response.json())
  .then((result) => {
    let date = result.months_temperature.map(item => item.date);
    let highTemp = result.months_temperature.map(data => data.high);
    let lowTemp = result.months_temperature.map(data => data.low);
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: date,
      datasets: [{
        label: 'High Temperature',
        data: highTemp,
        borderColor: 'green',
        borderWidth: 1
      },
      {
        label: 'Low Temperature',
        data: lowTemp,
        borderColor: 'red',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
})
.catch(error => console.log('error', error));
}
getData();