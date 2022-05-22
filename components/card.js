const app = document.getElementById("root");
console.log(app);

const createCard = (html) => {
    const template = document.createElement("template");
    // remove any whitespace when inserting html
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

const fetchWeatherAPI = async() => {
    // const lat = 53.3811;
    // const lon = 1.4701;
    const city = 'Birmingham, UK';
    const key = '06a2c505afed6691d1aa01d82d212b06';

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
    console.log(res);
    const weatherData = await res.json();
    console.log(weatherData);

    const requestedLocation = weatherData.name;
    console.log(requestedLocation);

    const requestedLocationTemperature = Math.round(weatherData.main.temp);
    console.log(requestedLocationTemperature);
    
    const weatherDetails = weatherData.weather[0];
    const weatherDescription = weatherDetails.description;

    const card = () => {
        const newCard = createCard(`
        <div id="card">
            <div class="card-container">
                <div class="uiControls"></div>
                <div class="container">
                    <div class="content">
                        <div class="city">${requestedLocation}</div>
                        <div class="temperature">${requestedLocationTemperature}<span>°</span></div>
                        <div class="forecast">${weatherDescription}</div>
                    </div>
                </div>
            </div>
        </div>
        `)
    
        app.appendChild(newCard);
    
    }
    card();
};

fetchWeatherAPI();