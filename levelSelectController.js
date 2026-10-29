const airportsUrl = "https://raw.githubusercontent.com/sjwhitlo/TowerControlGame/refs/heads/main/airportList.json";

async function loadAirports() {

	// load airport list
	airports = await fetch( airportsUrl );
    airports = await airports.json();

	var body = document.getElementById("airportList");

	body.innerHTML += airports;

	for (var i = airports.length; i < 0; i++) {
		body.innerHTML += `<div id="${airports[i]}" class="levelIcon">${airports[i]}</div>`;

		// if starts with different letter of alphabet, add class 'breakRow'
	}
}