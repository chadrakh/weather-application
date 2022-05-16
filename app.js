const createCard = (html) => {
    const template = document.createElement("template");
    // remove any whitespace when inserting html
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

let getLocation = "Derby";
let getTemperature = "15";
let getForecast = "Partly Cloudy";

const newCard = createCard(`
    <div class="container">
        <div class="uiControls"></div>
        <div class="content">
            <div class="city">${getLocation}</div>
            <div class="temperature">${getTemperature}°</div>
            <div class="forecast">${getForecast}</div>
        </div>
    </div>
`)

document.getElementById("app").appendChild(newCard);