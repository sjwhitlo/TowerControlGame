const airportsUrl = "https://raw.githubusercontent.com/sjwhitlo/TowerControlGame/refs/heads/main/airportList.json";

async function loadAirports() {

	// load airport list
	airports = await fetch( airportsUrl );
    airports = await airports.json();

    console.log( airports );

	var body = document.getElementById("airportList");
	body.innerHTML += `<div id="afw" class="levelIcon">AFW</div>`;
	body.innerHTML += `<div id="clt" class="levelIcon breakRow">CLT</div>`;
	body.innerHTML += `<div id="cvg" class="levelIcon">CVG</div>`;
	body.innerHTML += `<div id="dal" class="levelIcon breakRow">DAL</div>`;
	body.innerHTML += `<div id="dfw" class="levelIcon">DFW</div>`;
	body.innerHTML += `<div id="dto" class="levelIcon">DTO</div>`;
	body.innerHTML += `<div id="dtw" class="levelIcon">DTW</div>`;
	body.innerHTML += `<div id="ftw" class="levelIcon breakRow">FTW</div>`;
	body.innerHTML += `<div id="yyz" class="levelIcon breakRow">YYZ</div>`;
}