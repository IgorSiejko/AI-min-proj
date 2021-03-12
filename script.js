
function getText(fileToRead) {
	var read = new FileReader();
	read.onload = load;
	read.readAsText(fileToRead);
}
function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getText(files[0]);
	} 
}
//otworzenie pliuku
function load(event) {
	var csv = event.target.result;
	processData(csv);             
}

function drawOutput(line){

    //stworzenie tabeli
	var table = document.createElement("table");
	for (var i = 0; i < line.length; i++) {
		var row = table.insertRow(-1);
		for (var j = 0; j < line[i].length; j++) {
			var firstNameCell = row.insertCell(-1);
            // dodanie tekstu to komórek
			firstNameCell.appendChild(document.createTextNode(line[i][j]));
		}
	}
	document.getElementById("output").appendChild(table);
}
//ptrzetwarzanie pliku
function processData(csv) {
    //ustylizowanie kolumn tabeli, aby nie znajdowaly sie w jednej linii
    var allTextLines = csv.split(/\r\n|\n/);
    var line = [];
    //rodzielenie wierszy tabeli
    while (allTextLines.length) 
        {
            line.push(allTextLines.shift().split(','));
        }
	drawOutput(line);
}