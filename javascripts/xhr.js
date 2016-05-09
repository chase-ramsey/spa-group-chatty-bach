var Chatty = (function(xhr){

	var jsonMessages= [];
	var loadJson = new XMLHttpRequest();
	loadJson.addEventListener("load", fetchMsg);
	loadJson.open("GET", "javascripts/messages.json");
	loadJson.send();

	function fetchMsg () {
		var data = JSON.parse(this.responseText);
		for (i = 0; i < data.messages.length; i++) {
			jsonMessages.push(data.messages[i]);
			Chatty.addNewMessage(jsonMessages[i].message,jsonMessages[i].user);
		}
	}

	xhr.getJson = function () {
		return jsonMessages;
	};

	return xhr;

}(Chatty || {}));

