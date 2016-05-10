
"use strict";

var Chatty = (function(aug){

	var jsonMessages = [];

	$.ajax({
		url: "javascripts/messages.json"
	}).done(fetchMsg);

	function fetchMsg(data) {
		jsonMessages = data.messages;
		jsonMessages.forEach(function(message) {
			Chatty.addNewMessage(message.string, message.user);
		});
	}

	aug.getJson = function () {
		return jsonMessages;
	};

	return aug;

}(Chatty || {}));

