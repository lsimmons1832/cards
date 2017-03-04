var createButton = document.getElementById("create");

createButton.addEventListener("click", createCard);

function createCard() {
	var textElement = document.getElementById("userInput");

	 var textCard = document.getElementById("output");
	 textCard.innerHTML += "<div>" + textElement.value + "<button id='delete'>Delete</button></div>";
	
	}


var deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", deleteCard);

		function deleteCard() {
			if (node.parentNode) {
  	node.parentNode.removeChild(node);
		}
	}