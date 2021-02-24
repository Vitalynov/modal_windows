//
// Строит дополнительные карточки (фото, карточки товара и т.д.) 
//из файла .json метод GET по нажатию кнопки.
//
const showMoreStyles = (trigger, wrapper, url) => {
    const btn = document.querySelector(trigger);

    //запрос GET на сервер 
    const getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    };

    //Обработка промиса
    btn.addEventListener('click', function () { //стрелочную функцию ghbvtyznm нельзя, так как не сработает this
        getResource(url)
            .then(res => createCards(res.сards)) //промис масива .cards из файле .json
            .catch(error => alert.log(error));
        this.remove();
    });

    //При нажатии на тригер (кнопку) формируем новые карточки
    function createCards(response) {
        response.forEach(({
            src
        }) => {
            let card = document.createElement('div');
            card.classList.add('footer-instagram__img', 'fadeInUp');
            card.innerHTML = `
                    <img src=${src} alt=${src}>
            `;
            document.querySelector(wrapper).appendChild(card);
            document.querySelector(wrapper).style.marginBottom = '30px';
        });
    }
};
showMoreStyles('.footer-instagram__linck', '.footer-instagram__grid', '..//foto.json');