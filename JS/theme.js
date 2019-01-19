/*
Copyright © Ditpowuh 2019 Copyright Holder All Rights Reserved | All comments are from me
*/

var theme = 1;

function themechange() {
  if (theme === 1) {
    theme = 2;
    changeCSS("CSS/configuration1.css", 0);
  }
  else if (theme === 2) {
    theme = 1;
    changeCSS("CSS/configuration2.css", 0);
  }
  else {
    console.log("ERROR!: Something went wrong with function 'themechange'.");
  }
}

function changeCSS(cssFile, cssLinkIndex) {
  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);
  document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
