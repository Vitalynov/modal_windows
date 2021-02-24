/* 
Примеры webpack
Экспорты:
    export let one=1;
        let two = 2
    export {two}
    export defoult function arr(){ - пеоедаем по дефолту
        console.log('Helo!');
}
Импорты:
    import {one} from './moduls/function'; - именованный синтаксис
    import {one, tow} from './moduls/function'; - именованный синтаксис
    import {one as num} from './moduls/function'; - переименование переменной one в num
    import * as data from './moduls/function'; 
        console log (`${data.one} and ${data.tow}`)
    import arr from './moduls/function'; - принимаем по дефолту
        arr();
*/


import {
    openModalBtn
} from './moduls/open-btn';

//Плагин модального окна
$.modal = function () {
    //Функция создания модального окна
    function _createModal() {
        const modalWindow = document.createElement('div');
        modalWindow.classList.add('modal');
        modalWindow.setAttribute('data-clouse', 'true');
        modalWindow.insertAdjacentHTML('afterbegin',
            `<div class="modal__content">
                <div class="modal__close" data-clouse="true">&times;</div>
                <h4 class="modal__title" data-title></h4>
                <div class="modal__body" data-content>
                </div>
            </div>`
        );
        document.body.append(modalWindow);
        return modalWindow;
    }

    const $modal = _createModal();

    //создание методов модального окна open, clouse, setContent, destroy
    const modal = {
        open() {
            $modal.classList.add('show');
        },
        clouse() {
            $modal.classList.remove('show');
            setTimeout(() => {
                modal.destroy();
            }, 300);
        },
        setContent(title, html) {
            $modal.querySelector('[data-title]').textContent = title;
            $modal.querySelector('[data-content]').innerHTML = html;
        }
    };

    $modal.addEventListener('click', (e) => {
        if (e.target.dataset.clouse) {
            modal.clouse();
        }
    });

    return Object.assign(modal, {
        destroy() {
            $modal.parentElement.removeChild($modal);

        }
    });
};

openModalBtn();