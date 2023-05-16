/**
 * Voeg code toe die wordt uitgevoerd op de gebeurtenis Window Load.
 *      Dit wordt gedaan omdat we pas met de HTML-elementen kunnen communiceren als de pagina is geladen.
 * Haal met fetch de data op van https://handlers.education.launchcode.org/static/astronauts.json
 *      Voer dit deel uit binnen de load-gebeurtenishandler.
 * Voeg elke teruggekeerde astronaut toe aan de webpagina.
 *      Gebruik het HTML-template die je kunt vinden in de HTML-pagina.
 *      Zorg ervoor dat u de exacte HTML gebruikt, inclusief de CSS-klassen.
 * 
 * URL: https://handlers.education.launchcode.org/static/astronauts.json
 * 
 * 
 * BONUS:
 *  1. Display the astronauts sorted from most to least time in space.
 *  2. Make the "Active: true" text green, for astronauts that are still active (active is true).
 *  3. Add a count of astronauts to the page.
 * 
 */

window.addEventListener('load', setup);

function setup() {
    fetch('astronauts.json')
        .then(parseJSON)
        .then(showAstronauts);
}

function parseJSON(response) {
    return response.json();
}

function showAstronauts(data) {
    const astronaut = data[0];

    // Maak een <div class="astronaut">
    const astronautDiv = document.createElement('div');
    astronautDiv.className = "astronaut";

    // Maak een <div class="bio"> in <div class="astronaut">
    const astronautBio = document.createElement('div');
    astronautBio.classList.add('bio');
    astronautDiv.appendChild(astronautBio);

    // Maak een <h3> in <div class="bio">
    const astronautName = document.createElement('h3');
    astronautName.innerHTML = `${astronaut.firstName} ${astronaut.lastName}`;
    astronautBio.appendChild(astronautName);

    // Voeg <div class="astronaut"> toe aan <div id="container">
    const container = document.getElementById('container');
    container.appendChild(astronautDiv);

    // console.log(data);
}