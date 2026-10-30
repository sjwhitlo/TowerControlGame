const airportsUrl = "https://raw.githubusercontent.com/sjwhitlo/TowerControlGame/refs/heads/main/airportList.json";

async function loadAirports() {

	// load airport list
	airports = await fetch( airportsUrl );
    airports = await airports.json();

	var body = document.getElementById("airportList");
	
	for (var i = 0; i < airports.length; i++) {
		const newAirport = document.createElement( "div" );

		newAirport.id = airports[i];
		newAirport.textContent = airports[i].toUpperCase();
		newAirport.classList.add( "levelIcon" );
		newAirport.addEventListener('click', () => {
			localStorage.setItem('selectedAirport', newAirport.id);
  			window.location.href = "playLevel.html";
		});

		if ( i > 0 && airports[i].charAt(0) !== airports[i-1].charAt(0) ) {
			newAirport.classList.add( "breakRow" );
		}

		body.append( newAirport );
	}
}