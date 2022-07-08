const body = document.body;
const button = document.querySelector('#btn');
const inputLocation = document.querySelector('#location');

const cityName = document.createElement('div');
body.append(cityName);

const temperature = document.createElement('div');
body.append(temperature);


function city(input) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&APPID=479bc6949bbbf7c61ceba58032217558`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
        
    }).then(function(response) {
        console.log(response);
        cityName.textContent = `City: ${response.name}`;
        temperature.textContent = `Temperature (Fahrenheit): ${response.main.temp}`;
    })

}


button.addEventListener('click', () => {
    const location = inputLocation.value;
    city(location);
})