/*Работа с ТАБАМИ*/
function tubs(hederSelector, tubSelector, contentSelector, activeClass, display = "block") {
    let heder = document.querySelector(hederSelector),
        tub = document.querySelectorAll(tubSelector),
        content = document.querySelectorAll(contentSelector);

    function clouseTab() {

        content.forEach(item => {
            item.style.display = 'none';
        });

        tub.forEach(item => {
            item.classList.remove(activeClass);
        });
    };



    function openTab(i = 0) {

        if (i == '0') {
            content[i].style = "display:block;background:#FEF9C1FF;";
            tub[i].classList.add(activeClass);
        } else if (i == '1') {
            content[i].style = "display:block;background:#ADF2FEFF;";
            tub[i].classList.add(activeClass);
        } else {
            content[i].style = "display:block;background:#FFBCC0FF;";
            tub[i].classList.add(activeClass);
        };
    };

    clouseTab();
    openTab();

    heder.addEventListener('click', (e) => {
        const target = e.target;

        if (target &&
            (target.classList.contains(tubSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(tubSelector.replace(/\./, '')))) {
            // console.log(target);
            // console.log(target.classList.contains(tubSelector.replase(/\./, '')));
            tub.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    clouseTab();
                    openTab(i);
                };
            });
        };
    });
};

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    tubs('.hederTubs', '.tub', '.tubContent', 'activTab', 'block');
});