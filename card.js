const app = document.getElementById("root");
console.log(app);

const createCard = (html) => {
    const template = document.createElement("template");
    // remove any whitespace when inserting html
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

let getLocation = "Derby";
let getTemperature = "15";
let getForecast = "Partly Cloudy";
let cardId = 1;

const card = () => {
    const newCard = createCard(`
    <div id="card${cardId}">
        <div class="card-container">
            <div class="uiControls"></div>
            <div class="container">
                <div class="content">
                    <div class="city">${getLocation}</div>
                    <div class="temperature">${getTemperature}°</div>
                    <div class="forecast">${getForecast}</div>
                </div>
            </div>
        </div>
    </div>
    `)

    app.appendChild(newCard);

}

const data = '1';

if (data && app) {
 card();   
} else {
    console.error("ERR: Check data exists.")
};

// const loadData = async() => {
//     const endPoint = 'https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml';
//     const res = await fetch(endPoint);
//     console.log(res);
// }

// loadData();

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
		'X-RapidAPI-Key': 'f9ef252c2cmshc82296d80baa1a7p19035fjsnb0271162d138'
	}
};

fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=en&units=imperial&mode=xml', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));