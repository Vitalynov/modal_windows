/*Работа с модальными окнами*/

function modals(trigerSelector, modalSelector, clouseSelector) {
    const openBtn = document.querySelectorAll(trigerSelector),
        openModal = document.querySelector(modalSelector),
        closeModal = document.querySelector(clouseSelector),
        paddScr = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

    /*Открытие модального окна по ссылке*/
    openBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            };
            document.body.style.paddingRight = paddScr;
            openModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    /*Закрытие модального окна по клику на крестик*/
    closeModal.addEventListener('click', () => {

        document.body.style.paddingRight = '0px';
        openModal.style.display = 'none';
        document.body.style.overflow = '';

    });


    /*Закрытие модального окна по клику на подложку*/
    openModal.addEventListener('click', (e) => {
        if (e.target === openModal) {

            document.body.style.paddingRight = '0px';
            openModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
   
};

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals('.href1', '.popup1', '.clouse1');
    modals('.href2', '.popup2', '.clouse2');
    modals('.href3', '.popup3', '.clouse3');
});