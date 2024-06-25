const body = document.querySelector("body");
const html = document.querySelector("html");
const footer = document.querySelector("footer");
const se = window.setTimeout;
const documentEvent = document.addEventListener;


const htmlCallback = () => {
  se(function () {
    let b = Array.from(document.querySelectorAll("button span div"));
    b.forEach((item) => {
      if (item.innerText.toLocaleLowerCase() === "confirm") {
        item.click();
      }
    });
    htmlCallback();
  }, "500");
};

(function () {
  "use strict";
  htmlCallback();

  documentEvent("DOMContentLoaded", function () {
    console.log("content loaded");
    htmlCallback();
  });
})();
