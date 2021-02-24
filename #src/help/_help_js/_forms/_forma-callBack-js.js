/*-Работа с формами обратной связи-*/

/*Функция контроля ввода только ЧИСЕЛ в поле INPUT*/
const checkNumInputs = (selectorInput) => {
    const numInputs = document.querySelectorAll(selectorInput);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

/*- Отправка данных формы обратной связи -*/
const form = (selectorForm, selectorUrl, selectorModal, state) => {

    const forms = document.querySelectorAll(selectorForm),
        inputs = document.querySelectorAll('input'),
        text = document.querySelectorAll('textarea'),
        thankYou = document.querySelector('#js-thankYou'),
        modal = document.querySelector(selectorModal),
        email = document.querySelectorAll('input[name=email]'),
        company = document.querySelectorAll('input[name=company]'),
        textarea = document.querySelectorAll('textarea[name=text]');

    let statusContent = document.querySelector('.popupThankYou-content');


    checkNumInputs('input[name="phone"]');


    const message = {
        loading: 'Загрузка...',
        success: '<img src="/img/form/thanks.png" alt="Фото: Спасибо за заявку!">',
        failure: 'Что-то пошло не так. Попробуйте еше раз!'
    };

    const postData = async (url, data) => {
        thankYou.style = "display:block";
        statusContent.textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            if (item.getAttribute('type') !== 'submit') {
                item.value = '';
            }
        });
        text.forEach(item => {
            item.value = '';
        });
    };


    const btnSubmit = document.querySelector('.js-btnContact');
    btnSubmit.addEventListener('click', () => {
        if (selectorForm === '#calcForm') {
            company.forEach(item => {
                item.removeAttribute('required');
            });
            textarea.forEach(item => {
                item.removeAttribute('required');
            });
        } else {
            email.forEach(item => {
                item.removeAttribute('required');
            });
            textarea.forEach(item => {
                item.removeAttribute('required');
            });
        }

    });




    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            // console.log(company);



            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            postData(selectorUrl, formData)
                .then(res => {
                    console.log(res);
                    statusContent.innerHTML = message.success;
                })
                .catch(() => statusContent.innerHTML = message.failure)
                .finally(() => {
                    //добавляем атрибуты в ИНПУТЫ
                    clearInputs();
                    company.forEach(item => {
                        item.setAttribute('required', '');
                    });
                    textarea.forEach(item => {
                        item.setAttribute('required', '');
                    });
                    email.forEach(item => {
                        item.setAttribute('required', '');
                    });
                    //---------------------------------------
                    modal.style.display = 'none'; // удаляем модульное окно с ФОРМОЙ!
                    //Удаляем модульное окно СПАСИБО! за 3 секунды
                    setTimeout(() => {
                        thankYou.style = "display:none";
                    }, 3000);
                });
        });
    });

};


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let modalState = {}; // Объект для массива характеристик трибун.
    form('#calcForm', '../mailCalc.php', '.js-popupFormContacts', modalState); //Форма КАЛЬКУЛЯТОР
    form('#form', '../mail.php', '.js-popupFormContacts', modalState); //Форма ОБРАТНОГО ЗВОНКА
});