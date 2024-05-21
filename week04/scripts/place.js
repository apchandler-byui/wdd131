function calculateWindChill(temp, speed) {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
}

function addDataPoints(sectionId, dataPoints) {
    var section = document.getElementById(sectionId);
    for (var i = 0; i < dataPoints.length; i++) {
        var div = document.createElement('div');
        var label = document.createElement('span');
        label.className = 'label';
        label.textContent = dataPoints[i].label + ': ';
        var value = document.createElement('span');
        value.className = 'value';
        value.textContent = dataPoints[i].value;
        div.appendChild(label);
        div.appendChild(value);
        section.appendChild(div);
    }
}

window.onload = function() {
    var temp = 23; // replace with your static temperature value
    var speed = 29; // replace with your static wind speed value
    var windChill = temp <= 50 && speed > 3 ? calculateWindChill(temp, speed) : 'N/A';

    // Add your data values here
    var dataPoints = [
        {label: 'Area', value: '18,000 sq mi '},
        {label: 'Population', value: '7.2 million '},
        {label: 'Capital', value: 'Sacramento'},
        {label: 'Languages', value: 'English, Spanish'},
        {label: 'Currency', value: 'USD'},
        {label: 'Time Zone', value: 'Your data value 2'},
        {label: 'Calling Code', value: '+1'},
        {label: 'Internet TLD', value: '.ca'}
        
        
        // Add more data points as needed
    ];
    addDataPoints('data', dataPoints);

    // Add your weather values here
    var weatherPoints = [
        {label: 'Temprature', value: temp + 'c'},
        {label: 'Conditions', value: 'Sunny'},
        {label: 'Wind', value: speed + ' km/h'},
        {label: 'Wind Chill', value: windChill},
    ];
    addDataPoints('weather', weatherPoints);

    var date = new Date(document.lastModified);
    document.getElementById('footer-content').textContent =  'This page was last modified on ' + date.toLocaleDateString() + '. Current year is ' + new Date().getFullYear() + '.';
}