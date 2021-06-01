// ==UserScript==
// @name         Remove AWS Account ID
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove AWS Account ID from AWS Console!
// @author       gopinaath
// @match        https://console.aws.amazon.com/*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var username = document.getElementById('nav-usernameMenu');
if (username) {
    username.parentNode.removeChild(username);
}
    
})();
