const airfieldUrl = "https://raw.githubusercontent.com/sjwhitlo/TowerControlGame/refs/heads/main/Airports/";
var airfieldData = [];
const tileSize = 5;

async function loadAirport() {
	const airportName = localStorage.getItem("selectedAirport");
	document.title = "Tower Control - " + airportName.toUpperCase();

	// load airport data
	let airfield = await fetch( airfieldUrl + airportName + ".json" );
    airfieldData = await airfield.json();

	document.getElementById("airportName").textContent = airfieldData;
	document.getElementById("airportName").textContent = airfieldData[0].name;

	drawBackground();
}

function drawBackground() {
	let columns = airfieldData[0].airfield_map.cols;
	let rows = airfieldData[0].airfield_map.rows;

	const gridContainer = document.getElementById('airfieldMap');
	gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
	
	for (let row = 0; row < rows; row++) {
  		for (let column = 0; column < columns; column++) {
    		const tile = airfieldData[0].airfield_map.layers[0][row * columns + column];
    		const x = column * tileSize;
    		const y = row * tileSize;
    		drawTile(tile, x, y);
  		}
	}
}

function drawTile( tile, x, y ) {
	const newTile = document.createElement( "div" );

	newTile.id = "tile" + x + "_" + y;
	newTile.classList.add( "tile", "tile_" + tile );

	document.getElementById("airfieldMap").append(newTile);
}

