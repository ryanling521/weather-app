const body = document.body;
const form = document.querySelector('#form');
const button = document.querySelector('#btn');
const inputLocation = document.querySelector('#location');
const weatherImage = document.querySelector('#weather-image');

const cityName = document.createElement('div');
body.append(cityName);

const temperature = document.createElement('div');
body.append(temperature);

const forecast = document.createElement('div');
body.append(forecast);

// give city information
function cityInfo(input) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&APPID=479bc6949bbbf7c61ceba58032217558`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
        
    }).then(function(response) {
        console.log(response);
        cityName.textContent = `City: ${response.name}`;
        temperature.textContent = `Temperature (Fahrenheit): ${response.main.temp}`;
        forecast.textContent = `Description: ${response.weather[0].description}`;
        weatherImage.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
    })
}

// submit with enter
inputLocation.addEventListener('keypress', (e) => {
    let keyPressed = e.keyCode || e.which;
        if (keyPressed === 13) {
            e.preventDefault();
            const location = inputLocation.value;
            cityInfo(location);
        }
})