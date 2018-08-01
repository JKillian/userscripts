// ==UserScript==
// @name         Gmail Event Response Keyboard Shortcuts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Use ctrl+y, ctrl+m, and ctrl+n to response to events in gmail
// @author       Jason Killian
// @match        https://mail.google.com/mail/u/0/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const findBtn = text => {
        const buttons = Array.from(document.querySelectorAll("div[role='button']"))
        return buttons.find(b => b.innerText === text) || {click: () => {/* noop */}};
    };
    window.addEventListener("keypress", e => {
        if (e.ctrlKey) {
            if (e.key === "y") findBtn('Yes').click()
            if (e.key === "m") findBtn('Maybe').click()
            if (e.key === "n") findBtn('No').click()
        }
    });
})();
