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

        const form = document.querySelector("form");
        form.noValidate = true;
        formSubmit();
        contactFormPress();
        setTimeout(function() { 
            let element = document.getElementsByClassName("loader");
            element[0].classList.toggle("hide");
        }, 3000);
        fadeout();
        let menu = document.querySelector('#mobile-menu');
        let menuLinks = document.querySelector('.navbar-menu');

        menu.addEventListener('click', function() {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });

        document.querySelectorAll('.navbar-links').forEach(item => {
            item.addEventListener('click', event => {
                menu.classList.toggle('is-active');
                menuLinks.classList.toggle('active');
            });
        });

        document.querySelector('.navbar-btn').addEventListener('click', function() {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
    }

    function formSubmit() {
        let form = document.querySelector("form");
        let statusTxt = form.querySelector("#response-message");
        form.onsubmit = (e) => {
            e.preventDefault();
            statusTxt.style.display = "block";

            let xhr = new XMLHttpRequest();
            xhr.open("POST", "message.php", true);
            xhr.onload = () => {
                if(xhr.readyState == 4 && xhr.status == 200) {
                    let response = xhr.response;
                    if(response.indexOf("All fields are required!") !=-1 || response.indexOf("Plese enter a valid email address!") != -1 || response.indexOf("Sorry, failed to send your message!") != -1) {
                        statusTxt.style.color = "red";
                    } else {
                        statusTxt.style.color = "green";
                        form.reset();
                        setTimeout(() => {
                            statusTxt.style.display = "none";
                        }, 3000);
                    }
                    statusTxt.innerText = response; 
                }
            }
            let formData = new FormData(form);
            xhr.send(formData);
        }
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

    function contactFormPress() {
        const inputs = document.querySelectorAll(".input");

        inputs.forEach(input => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunct);
        })
    }
    
    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunct() {
        let parent = this.parentNode;
        if(this.value == "") {
            parent.classList.remove("focus");
        }
    }
})();






// TO DO:
//  content for About me section
//  content for resume section
//  content for project work


