
"use strict";

var Chatty = (function(aug) {

	var messages = [];
	var idCounter = 0;

	var outputDiv = document.getElementById("msgArea");

	function Message (string, handle, person, updateTime) {
		this.string = string;
		this.handle = handle;
		this.user = person;
		this.time = updateTime;
	}

	aug.addNewMessage = function (newItem, person) {
		var updateTime = new Date();
		updateTime = updateTime.toLocaleTimeString() + " " + updateTime.toLocaleDateString();
		var newMsg = new Message(newItem, `msg${idCounter}`, person, updateTime);
		messages.push(newMsg);
		idCounter++;
		Chatty.loadMessages();
	};

	aug.editMessage = function (location, editText, editId, index) {
		var updateTime = new Date();
		var toEdit = messages.find(function(message) {
			return message.handle === editId;
		});
		updateTime = updateTime.toLocaleTimeString() + " " + updateTime.toLocaleDateString();
		var editMsg = new Message(editText, editId, `${toEdit.user}`, updateTime);
		toEdit.string = editMsg.string;
		Chatty.loadMessages();
	};

	aug.getMessages = function () {
		return messages;
	};

	aug.deleteData = function (ex) {
		messages = messages.filter(function(message) {
			return message.handle !== ex;
		});
		Chatty.loadMessages();
};

	aug.loadMessages = function () {
		var buildHTML = "";
		if (messages.length >= 20){
			messages.shift(messages[0]);
		}
		for (var i = 0; i < messages.length; i++) {
			buildHTML += `<p id="${messages[i].handle}" class="message"><span class="strong">${messages[i].user}: </span><label class="userMsg ">${messages[i].string} </label><button class="edit">Edit</button><button class="delete">Delete</button><span class="timeStamp">${messages[i].time}</span></p>`;
		}
		$("#msgArea").html(buildHTML);
		for (var x = 0; x < messages.length; x++) {
			document.getElementById(`${messages[x].handle}`).addEventListener("click", Chatty.deleteMsg);
		}
	};


	return aug;

}(Chatty || {}));
