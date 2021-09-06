"use strict";
(function() {
    window.addEventListener("load", init);
    
    function init() {
        setTimeout(function() { 
            let element = document.getElementsByClassName("loader");
            element[0].classList.toggle("hide");
            fadeout();
        }, 1700);
        let menu = document.querySelector('#mobile-menu');
        let menuLinks = document.querySelector('.navbar-menu');

        menu.addEventListener('click', function() {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
    }

    function fadeout() {
        setInterval(hide, 100);
    }

    function hide() {
        let wrapper = document.getElementsByClassName("loader-wrapper");
        let opacity =  Number(window.getComputedStyle(wrapper[0]).getPropertyValue("opacity"));
        if(opacity > 0) {
            opacity = opacity-0.1;
            wrapper[0].style.opacity=opacity;
        } else {
            clearInterval(0);
            wrapper[0].style.zIndex=0;
        }
    }
})();

