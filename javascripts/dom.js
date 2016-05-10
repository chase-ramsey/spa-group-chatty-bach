
"use strict";

// DOM handlers

	// Header elements
		 $("#userInput").keyup(validateKeyup);					// Listens for keyup; runs function to validate for return key
		 $("#darkTheme").change(toggleDark);						// Listens for change; runs function to add/remove dark theme class
		 $("#largeText").change(toggleLarge);						// Listens for change; runs function to add/remove large text class
		 $("#submit").click(msgSubmit);									// Listens for click; runs function to begin the process of creating a new message
		 $("#clear").click(Chatty.deleteAll);						// Listens for click; calls Chatty.deleteAll()

	// Main content elements
		 $("msgArea").click(Chatty.deleteMsg);					// Listens for click; runs function that calls Chatty.deleteMsg and passes in event.target
		 $("msgArea").click(Chatty.editMsg);						// Listens for click; runs function that calls Chatty.deleteMsg and passes in event.target

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
 				$("#main-content").toggleClass("dark-bg");
 				$("#navBar").toggleClass("dark-h-bg");
 				$("#logo").toggleClass("dark-bg");
 				$("h1").toggleClass("dark-h-text");
 				$("h2").toggleClass("dark-h-text");
 				$("#msgArea").toggleClass("dark-msg-area");
 				$(".message").toggleClass("dark-bg");
 				$(".message").children("button").css("color", "black");
 			}

  // toggleLarge() - Callback from largeText
  	// When the large text checkbox changes checked/unchecked,
  	// the page's content wrapper toggles the class for large text
  		function toggleLarge() {
  			$("#wrapper").toggleClass("large");
  		}

	// msgSubmit() - Callback from buttonSubmit
		// When the submit button is clicked (or a return keypress is heard),
		// the value of the text input is passed into Chatty.addNewMessage()
  		function msgSubmit() {
				if ($("#userInput").val() === "") {
					alert("Text field cannot be empty");
				} else if (edit === true) {
					var editMsg = document.getElementById(id);
					Chatty.editMessage($("#userInput").val(), id);
					$("#userInput").value = "";
					edit = false;
				} else {
						var rButton = document.getElementsByClassName("rButton");
						var selected;
						for (var i = 0; i < rButton.length; i++) {
		  				if (rButton[i].checked) {
		  					selected = rButton[i].value;
		  				}
		  			}
		  			Chatty.addNewMessage($("#userInput").val(), selected);
		  			$("#userInput").val("");
		  			$("#clear").disabled = false;
	  		}
  		}

	// Edit functionality
		var id;

		function editMsg(event) {
			if (event.target.className === "edit") {
				edit = true;
				id = event.currentTarget.id;
				var userMessage = $(this).children("label").html();
				$("#userInput").focus();
				$("#userInput").val(userMessage);
			}
		}

// Custom Theme JS

$("#saveTheme").click(changeTheme);

function changeTheme() {
  var newBCG = $("changeBackground").val();
  var newFont = $("changeFont").val();
  $("#msgArea").css("background", `${newBCG}`).css("color", `${newFont}`);
}
