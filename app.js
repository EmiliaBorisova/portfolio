"use strict";
(function() {
    window.addEventListener("load", init);

    function init() {
        let menu = document.querySelector('#mobile-menu');
        let menuLinks = document.querySelector('.navbar-menu');

        menu.addEventListener('click', function() {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
    }
})();

