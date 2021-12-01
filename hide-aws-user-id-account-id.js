// ==UserScript==
// @name         Remove AWS Account ID
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Remove AWS Account ID from AWS Console!
// @author       gopinaath, sysdevoperations
// @match        https://console.aws.amazon.com/*
// @match        https://console.amazonaws.com/*
// @match        https://*.console.aws.amazon.com/*
// @match        https://*.console.amazonaws.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var username = document.getElementById('nav-usernameMenu');
    username ? username.parentNode.removeChild(username) : '';
})();
