
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Month');
      data.addColumn('number', 'Google');
      data.addColumn('number', 'WPPOOL');
      data.addColumn('number', 'Twitter');
      data.addColumn('number', 'Microsoft');

      data.addRows([
        ['Feb',  37.8, 80.8, 41.8, 41.8],
        ['March',  30.9, 69.5, 32.4, 32.4],
        ['April',  25.4,   57, 25.7, 25.7],
        ['May',  11.7, 18.8, 10.5, 10.5],
        ['June',  11.9, 17.6, 10.4, 10.4],
        ['July',   8.8, 13.6,  7.7,  7.7],
        ['Aug',   7.6, 12.3,  9.6,  9.6],
        ['Sept',  12.3, 29.2, 10.6, 10.6],
        ['Oct',  16.9, 42.9, 14.8, 14.8],
        ['Nov', 12.8, 30.9, 11.6, 11.6],
        ['Dec',  5.3,  7.9,  4.7,  4.7],
        ['Jan',  6.6,  8.4,  5.2,  5.2],
        ['Feb',  4.8,  6.3,  3.6,  3.6],
        ['March',  4.2,  6.2,  3.4,  3.4]
      ]);

      var options = {
       
        width: '100%',
        height: '100%',
        legend: { position: 'bottom', shape: 'square' },
        tooltip: { isHtml: true }, 
       
        vAxis: { title: '',
         ticks: [-10,0,10, 20,30, 40,50, 60,70, 80,90, 100], 
          format: '#\'%\''
         },
      };

      var chart = new google.visualization.LineChart(document.getElementById('line_top_x'));
      chart.draw(data, options);
      window.addEventListener('resize', function() {
  chart.draw(data, options);
});
    }
