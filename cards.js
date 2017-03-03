var Createbutton = document.getElementById("create");
var Deletebutton = document.getElementById("delete");

Createbutton.addEventListener("click", createCard);

function createCard() {
	var textElement = document.getElementById("userInput");
	//console.log("verify textElement", textElement.value);
	// var textCard = textElement.value;
	 var textCard = document.getElementById("output");
	 textCard.innerHTML = "<div>" + textElement.value + "</div>";

	console.log("e", textCard);
}

