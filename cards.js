var createButton = document.getElementById("create");

createButton.addEventListener("click", createCard);

function createCard() {
	var textElement = document.getElementById("userInput");

	 var textCard = document.getElementById("output");
	 textCard.innerHTML += "<div class='card'>" + textElement.value +"<img src='http://placeimg.com/200/200/tech'>"+"<button class='delete'>Delete</button></div>";
	}


//var deleteButton = document.getElementById("delete");
document.body.addEventListener("click", function(event){
	if (event.target.className === "delete") {
  	event.target.parentNode.remove();
		}
});