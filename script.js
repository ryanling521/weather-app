// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=479bc6949bbbf7c61ceba58032217558
const body = document.body;

const cityName = document.createElement('div');
body.append(cityName);


fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=479bc6949bbbf7c61ceba58032217558', {mode: 'cors'})
.then(function(response) {
    return response.json();
    
}).then(function(response) {
    console.log(response);

    cityName.textContent = response.name;
    
})
