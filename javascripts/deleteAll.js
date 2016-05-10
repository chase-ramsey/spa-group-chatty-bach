
"use strict";

var Chatty = (function (aug) {

  aug.deleteMsg = function (clickEvent) {
    if (clickEvent.target.className === "delete") {
      Chatty.deleteData(clickEvent.currentTarget.id);
    }
  };

  aug.deleteAll = function () {
    $(".message").each(function(i) {
      Chatty.deleteData(`msg${i}`);
    });
    $("#clear").attr("disabled", "true");
  };

  return aug;

}(Chatty || {}));
