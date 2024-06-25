const body = document.querySelector("body");
const html = document.querySelector("html");
const footer = document.querySelector("footer");
const se = window.setTimeout;
const documentEvent = document.addEventListener;


const classWatcher = (element, callback) => {
  const observer = new MutationObserver((ev) => {
    if (typeof callback === "function") callback();
  });

  observer.observe(element, {
    attributes: true,
    subtree: true,
  });
  return observer;
};

const htmlCallback = () => {
  se(function () {
    let b = Array.from(document.querySelectorAll("button"));
    b.forEach((item) => {
      if (item.innerText.toLocaleLowerCase() === "sign") {
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
