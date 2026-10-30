const airfieldUrl = "https://raw.githubusercontent.com/sjwhitlo/TowerControlGame/refs/heads/main/Airports/";
var airfieldData = [];
const tileSize = 5;

async function loadAirport() {
	const airportName = localStorage.getItem("selectedAirport");

	// load airport data
	let airfield = await fetch( airfieldUrl + airportName + ".json" );
    airfieldData = await airfield.json();

	document.getElementById("airportName").textContent = airfieldData;

	drawBackground();
}

function drawBackground() {
	let columns = airfieldData[0].airfieldMap.cols;
	let rows = airfieldData[0].airfieldMap.rows;

	const gridContainer = document.getElementById('grid-container');
	gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
	
	for (let column = 0; column < columns; column++) {
  		for (let row = 0; row < rows; row++) {
    		const tile = row * map.cols + col;
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

