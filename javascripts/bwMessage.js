var Chatty = (function(aug){
	var messages = [];
	var updateTime = new Date();
	var para = document.getElementsByTagName("p");


		aug.addNewMessage = function(newItem){
<<<<<<< HEAD
				var para = document.getElementsByTagName("p");
				if(newItem === "" || newItem === " "){       //TRY TO FIX MULTIPLE SPACES
					alert("Text field cannot be empty");
				} else if (messages.length >= 20) {
					updateTime = new Date();
					updateTime = updateTime.toLocaleTimeString() + updateTime.toLocaleDateString();
					messages.shift(messages[0]);    //HOW CAN YOU USE THE ARRAY TO BUILD THE DOM
					msgArea.removeChild(para[0]);
					messages.push(newItem);
					msgArea.innerHTML
									  += "<div class='msg'><p class='userMsg'>" +
									  newItem + "</p>"
									  " <button type='button' class='edit'>Edit</button>" +
									  "<button type='button' class='delete'>Delete</button> " + updateTime + "</div>";
				}else {
					messages.push(newItem);
					updateTime = new Date();
					updateTime = updateTime.toLocaleTimeString() + " " +updateTime.toLocaleDateString();
					msgArea.innerHTML += "<div class='msg'><p class='userMsg'>" +
									  newItem + "</p>" +
									  " " +
									  updateTime + " <button type='button' class='edit'>Edit</button>" +
									  " <button type='button' class='delete'>Delete</button></div>";

=======
			// if(newItem == "" || newItem == " "){  //ADDED REGEX & .MATCH TO MAKE ANYTING AFTER "" alert the user
			if (messages.length >= 20) {
				updateTime = new Date();
				updateTime = updateTime.toLocaleTimeString() + updateTime.toLocaleDateString();
				messages.shift(messages[0]);    //HOW CAN YOU USE THE ARRAY TO BUILD THE DOM
				msgArea.removeChild(para[0]);
				messages.push(newItem);
				msgArea.innerHTML +=
													"<p>" +
												  newItem +
												  " <button type='button' class='delete'>Delete</button> " + updateTime + "</p>";
			} else {
				messages.push(newItem);
				updateTime = new Date();
				updateTime = updateTime.toLocaleTimeString() + " " +updateTime.toLocaleDateString();
				msgArea.innerHTML +=
													"<p>" +
									 				newItem +
													 " " +
								  				updateTime +
								  				" <button type='button' class='delete'>Delete</button></p>";
>>>>>>> master
				};

		};

		aug.getMessages = function() {
			return messages;
		}

		aug.deleteData = function(ex, span) {
			messages.splice(ex, span);
		}

	return aug;
}(Chatty || {}));


