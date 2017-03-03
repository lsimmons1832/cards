var Createbutton = document.getElementById("create");

Createbutton.addEventListener("click", createCard);

function createCard() {
	var textElement = document.getElementById("userInput");

	 var textCard = document.getElementById("output");
	 textCard.innerHTML = "<div>" + textElement.value + "</div><button id='delete'>Delete</button>";
	
	}

var Deletebutton = document.getElementById("delete");
Deletebutton.addEventListener("click", deleteCard);

		function deleteCard() {
			event.target.parentNode.remove();
		}
