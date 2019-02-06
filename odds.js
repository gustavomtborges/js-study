"use strict";

var person;
person = {};

(function(window) {
  let myLib = function(msg, lang) {
    return new Lib(msg, lang);
  };

  let supportedLangs = ["en"];

  function Lib(msg, lang) {
    this.lang = lang;
    this.msg = msg;
    this.validade();
  }

  Lib.prototype = {
    validade: function() {
      if (supportedLangs.indexOf(this.lang) === -1) {
        throw new Error("Invalid language!");
      }
    }
  };

  window.myLib = myLib;
})(this);
