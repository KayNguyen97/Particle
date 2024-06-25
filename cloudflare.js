// ==UserScript==
// @name         Cloudflare
// @namespace    http://tampermonkey.net/
// @version      2024-06-02
// @description  try to take over the world!
// @author       You
// @match        https://challenges.cloudflare.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

const clickCaptcha = () => {
    let input = document.querySelector('input[type=checkbox]');
    if(input) {
        input.click();
    } else {
        setTimeout(clickCaptcha, 500);
   }
};

(function() {
    'use strict';
clickCaptcha();
})();