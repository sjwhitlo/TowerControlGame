const tileAtlasUrl = "https://raw.githubusercontent.com/sjwhitlo/TowerControlGame/refs/heads/main/tileAtlas.png";
const airfieldUrl = "https://raw.githubusercontent.com/sjwhitlo/TowerControlGame/refs/heads/main/Airports/";
const tileSize = 64;
const tileOutputSize = 0.25;
const updatedTileSize = tileSize * tileOutputSize;
const atlasCol = 11;
const atlasRow = 11;
const tileAtlas = new Image();

var airfieldData = [];

async function loadAirport() {
	
	const airportName = localStorage.getItem("selectedAirport");
	document.title = "Tower Control - " + airportName.toUpperCase();

	// load airport data
	let airfield = await fetch( airfieldUrl + airportName + ".json" );
    airfieldData = await airfield.json();

	document.getElementById("airportName").textContent = airfieldData;
	document.getElementById("airportName").textContent = airfieldData[0].name;

	tileAtlas.src = await tileAtlasUrl;
	drawBackground();
}

function drawBackground() {
	let airfieldMap = airfieldData[0].airfield_map
	let rows = airfieldMap.rows;
	let columns = airfieldMap.layers.background.length / rows;

	const gridContainer = document.getElementById('airfieldMap');
	// gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
	// gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
	gridContainer.style.width = columns * tileSize;
	gridContainer.style.height = rows * tileSize;
	
	for (let row = 0; row < rows; row++) {
  		for (let column = 0; column < columns; column++) {
    		const tileValue = airfieldMap.layers.background[ row * columns + column] ;
    		const y = column * tileSize;
    		const x = row * tileSize;
    		drawTile( tileValue, x, y );
  		}
	}
}

function drawTile( tileValue, col, row ) {
	const canvas = document.getElementById('airfieldMap');
	const ctx = canvas.getContext('2d');

	if( tileValue != 0 ) {
        tileValue -= 1;
        sourceY = Math.floor( tileValue / atlasCol ) * tileSize;
        sourceX = ( tileValue % atlasCol ) * tileSize;
        ctx.drawImage( tileAtlas, sourceX, sourceY, tileSize, tileSize,
        	row * tileOutputSize, col * tileOutputSize, updatedTileSize, updatedTileSize );
    }

	// document.getElementById("airfieldMap").append(newTile);
}

