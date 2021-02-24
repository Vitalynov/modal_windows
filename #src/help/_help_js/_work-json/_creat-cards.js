/*-создаем карточки товара на сайте-*/
let products = {}; //ОБЪЕКТ - группы продуктов (трибуны, сиденья, кресла)

/*-конструктор карточек товара-*/
function createItems(url, product) {
    //создаем ОБЪЕК из файлов .json
    const getJson = async () => {
        /*-async function getJson() {-*/
        let response = await fetch(url);
        // if (!response.ok) {
        //     throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        // }
        products = await response.json();
        

        //конструктор карточек товара
        let card = " ";
        for (let key in products) {
            card += `
            <div class="${product}-content__item">
                <h3 class="${product}-content__titele titele-h3">${products[key].name}</h3>
                <div class="${product}-content__item--img">
                <img src="${products[key].image}"alt="${products[key].name}"/>
                </div>
                <div class="${product}-content__item--btn btn js-btn" data-art="${key}">Подробнее</div>
            </div>
            `;
        }
        document.querySelector(`.${product}-content`).innerHTML = card;
    };
    getJson();
}

createItems('../tribunes.json', 'tribunes');
createItems('../seats.json', 'seats');
createItems('../armchairs.json', 'armchairs');