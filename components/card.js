const root = document.getElementById("root");
console.log(root);

const createCard = (html) => {
    const template = document.createElement("template");
    // remove any whitespace when inserting html
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

const fetchWeatherAPI = async() => {
    const city = 'Birmingham, UK';
    const key = '06a2c505afed6691d1aa01d82d212b06';
    const id = '1';

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
        <div id="app">
            <div id="card${id}">
                <div class="card-container">
                    <div class="card-content">
                        <div class="city">${requestedLocation}</div>
                        <div class="temperature">${requestedLocationTemperature}<span>°</span></div>
                        <div class="description">${weatherDescription}</div>
                    </div>
                </div>
            </div>
            <div id="card2">
                <div class="card-container">
                    <div class="card-content">
                        <div class="city">${requestedLocation}</div>
                        <div class="temperature">${requestedLocationTemperature}<span>°</span></div>
                        <div class="description">${weatherDescription}</div>
                    </div>
                </div>
            </div>
            <div id="card3">
                <div class="card-container">
                    <div class="card-content">
                        <div class="city">${requestedLocation}</div>
                        <div class="temperature">${requestedLocationTemperature}<span>°</span></div>
                        <div class="description">${weatherDescription}</div>
                    </div>
                </div>
            </div>
        </div>
        `)
    
        root.appendChild(newCard);
    
    }
    card();
};

fetchWeatherAPI();