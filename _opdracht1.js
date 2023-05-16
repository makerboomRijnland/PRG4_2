/**
 * 0.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 *
 * 1.
 * Schrijf de code om met fetch() de volgende URL op te halen:
 * https://handlers.education.launchcode.org/static/planets.json
 *
 * fetch(): https://developer.mozilla.org/en-US/docs/Web/API/fetch
 *
 *
 * 2.
 * Bekijk de response (bijv. met console.log, of via de network inspector.
 *
 * Request: https://developer.mozilla.org/en-US/docs/Web/API/Request
 * Response: https://developer.mozilla.org/en-US/docs/Web/API/Response
 *
 *
 * 3.
 * Bekijk met de .json() methode de data in de console
 *
 * Response.json(): https://developer.mozilla.org/en-US/docs/Web/API/Response/json
 *
 *
 * 4.
 * Vervang console.log(...) met de onderstaande code:
 *
 *   const destination = document.getElementById("destination");
 *   destination.innerHTML = `<h3>Planet ${planeten[0].name}</h3>`;
 *
 * Bekijk de nieuwe data in je browser.
 *
 *
 * 5.
 * Schrijf een functie die als argument een planeet object ontvangt,
 * en de HTML van #destination aanpast naar onderstaande voorbeeld (gebruikmakend van de data natuurlijk)
 *
 * LET OP: je zult de variabele waar de planeten in worden opgeslagen en opgehaald globaal moeten maken.
 *
 * Voorbeeld output:
 *
 *   <h3>Planet Tatooine</h3>
 *   <img src='https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg' height='250'>
 *
 *
 * 6.
 * Schrijf de code die ervoor zorgt dat de knoppen Previous, Random, Next werken.
 *
 * LET OP: je zult bij moeten houden welke planeet (index) wordt getoond.
 */

let planeten = [];
let planetIndex = 0;

window.addEventListener("load", function () {
    document
        .querySelector("#planet-nav .prev")
        .addEventListener("click", previousPlanet);
    document
        .querySelector("#planet-nav .random")
        .addEventListener("click", randomPlanet);
    document
        .querySelector("#planet-nav .next")
        .addEventListener("click", nextPlanet);
        
    fetch("/planets.json")
        .then(doneLoadingJSON)
        .then(loadPlanets);
});

function doneLoadingJSON(response) {
    return response.json();
}

function loadPlanets(data) {
    planeten = data;
    // alert(planeten[0].name);
    showPlanet(planeten[0]);
}

function showPlanet(planet) {
    const destination = document.getElementById("destination");
    let planetHTML = `<h3>Planet ${planet.name}</h3>`;
    planetHTML += `<img src="${planet.image}" width="250">`;
    destination.innerHTML = planetHTML;
}

function nextPlanet() {
    planetIndex++;
    if (planetIndex >= planeten.length) {
        planetIndex = 0;
    }
    showPlanet(planeten[planetIndex]);
}

function previousPlanet() {
    planetIndex--;
    if (planetIndex < 0) {
        planetIndex = planeten.length - 1;
    }
    showPlanet(planeten[planetIndex]);
}

function randomPlanet() {
    planetIndex = Math.floor(Math.random() * planeten.length);
    showPlanet(planeten[planetIndex]);
}
