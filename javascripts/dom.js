
"use strict";

// DOM handlers

	// Header elements
		 var userInput = document.getElementById("userInput");	// Grabs user text input field
		 userInput.addEventListener("keyup", validateKeyup);		// Listens for keyup; runs function to validate for return key

		 var darkTheme = document.getElementById("darkTheme");	// Grabs dark theme checkbox
		 darkTheme.addEventListener("change", toggleDark);			// Listens for change; runs function to add/remove dark theme class

		 var largeText = document.getElementById("largeText");	// Grabs large text checkbox
		 largeText.addEventListener("change", toggleLarge);			// Listens for change; runs function to add/remove large text class

		 var buttonSubmit = document.getElementById("submit");	// Grabs submit button
		 buttonSubmit.addEventListener("click", msgSubmit);			// Listens for click; runs function to begin the process of creating a new message

		 var buttonClearAll = document.getElementById("clear");				// Grabs clear button
		 buttonClearAll.addEventListener("click", Chatty.deleteAll);	// Listens for click; calls Chatty.deleteAll()

	// Main content elements
		 var msgArea = document.getElementById("msgArea");			// Grabs the output div where all messages appear
		 msgArea.addEventListener("click", Chatty.deleteMsg);		// Listens for click; runs function that calls Chatty.deleteMsg and passes in event.target
		 msgArea.addEventListener("click", editMsg);

		 // All variables below are defined for the purpose of toggling light/dark classes
		 var headerDiv = document.getElementById("navBar");
		 var logoDiv = document.getElementById("logo");
		 var h1Text = document.getElementsByTagName("h1");
		 var h2Text = document.getElementsByTagName("h2");
		 var mainContent = document.getElementById("main-content");
		 var contentWrap = document.getElementById("wrapper");

 // Edit mode
 		var edit = false;

// Functions

	// validateKeyup() - Callback from userInput
		// When any keypress is heard in the user text input,
		// this function checks to see if the key was "return/enter".
		// If "return", it runs msgSubmit().
		 function validateKeyup(key) {
		 		if (key.which === 13) {
		 			msgSubmit();
		 		}
		 }

 	// toggleDark() - Callback from darkTheme
 		// When the dark theme checkbox changes checked/unchecked,
 		// the page's content wrapper toggles the class for dark theme
 			function toggleDark() {
 				mainContent.classList.toggle("dark-bg");
 				headerDiv.classList.toggle("dark-h-bg");
 				logoDiv.classList.toggle("dark-bg");
 				h1Text[0].classList.toggle("dark-h-text");
 				h2Text[0].classList.toggle("dark-h-text");
 				msgArea.classList.toggle("dark-msg-area");
 				var messageClasses = document.getElementsByClassName("message");
 				for (var i = 0; i < messageClasses.length; i++) {
 					messageClasses[i].classList.toggle("dark-bg");
 				}
 			}

  // toggleLarge() - Callback from largeText
  	// When the large text checkbox changes checked/unchecked,
  	// the page's content wrapper toggles the class for large text
  		function toggleLarge() {
  			contentWrap.classList.toggle("large");
  		}

	// msgSubmit() - Callback from buttonSubmit
		// When the submit button is clicked (or a return keypress is heard),
		// the value of the text input is passed into Chatty.addNewMessage()
  		function msgSubmit() {
		  	var pattern = userInput.value.trim();
				if( pattern === "") {
					alert("Text field cannot be empty");
				} else if (edit === true) {
					var editMsg = document.getElementById(id);
					var index = id.charAt(3);
					Chatty.editMessage(messageToEdit, userInput.value, id, index);
					userInput.value = "";
					edit = false;

				} else {
						var rButton = document.getElementsByClassName("rButton");
						for (var i = 0; i < rButton.length; i++) {
		  				if (rButton[i].checked) {
		  					var selected = rButton[i].value;
		  				}
		  			}
		  			Chatty.addNewMessage(userInput.value, selected);
		  			userInput.value = "";
		  			buttonClearAll.disabled = false;
	  		}
  		}

	// Edit functionality
		var messageToEdit;
		var id;
		function editMsg(event) {
			edit = true;
			messageToEdit = event.target.parentNode;
			id = messageToEdit.id;
			var userMessage = messageToEdit.querySelector("label");
			if(event.target.className === "edit") {
				userInput.focus();
				userInput.value = userMessage.innerHTML;
			}
		}

// Custom Theme JS

var changeBCG = document.getElementById("changeBackground");
var changeFont = document.getElementById("changeFont");
var save = document.getElementById("saveTheme");
save.addEventListener("click", changeTheme);

function changeTheme() {
  var newBCG = changeBCG.value;
  var newFont = changeFont.value;
  msgArea.setAttribute("style", `background-color:${newBCG}; color:${newFont}`);
}
