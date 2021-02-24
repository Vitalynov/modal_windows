/*Работа с модальными окнами через артикли файла .json */

function modals(classProduct) {
    const paddScr = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
    let articul = "";
    /*Открытие модального окна по клику на кнопку товара*/
    document.querySelector(classProduct).addEventListener('click', (e) => {
        if (e.target.classList.contains('js-btn')) {
            articul = e.target.getAttribute('data-art');

            const openModal = document.querySelector(`.modal-${articul}`),
                closeModal = document.querySelector(`.clouse-${articul}`);

            document.body.style.paddingRight = paddScr;
            openModal.style.display = 'block';
            document.body.style.overflow = 'hidden';

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
        }
    });
}


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals('.tribunes-content');
    modals('.seats-content');
    modals('.armchairs-content');
});