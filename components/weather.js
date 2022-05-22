const fetchWeatherAPI = async() => {
    // const lat = 53.3811;
    // const lon = 1.4701;
    const city = 'London';
    const key = '06a2c505afed6691d1aa01d82d212b06';

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
    console.log(res);
    const weatherData = await res.json();
    console.log(weatherData);

    const requestedLocation = weatherData.name;
    console.log(requestedLocation);

    const requestedLocationTemperature = weatherData.main.temp;
    console.log(requestedLocationTemperature);
    
    const weatherDetails = weatherData.weather[0];
    const weatherDescription = weatherDetails.description;
    console.log(weatherDescription)
};

fetchWeatherAPI();