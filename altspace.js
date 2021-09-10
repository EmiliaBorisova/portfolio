"use strict";
(function() {
    window.addEventListener("load", init);
    
    function init() {
        if (history.scrollRestoration) {
            history.scrollRestoration = 'manual';
        } else {
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            }
        }
        
        let menu = document.querySelector('#mobile-menu');
        let menuLinks = document.querySelector('.navbar-menu');

        menu.addEventListener('click', function() {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
    }
})();