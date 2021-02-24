class СreateCard {
    constructor(sale, name, image, price, availability, perentSelector) {
        this.sale = sale;
        this.title = name;
        this.img = image;
        this.alt = this.title;
        this.price = price;
        this.availability = availability;
        this.parent = document.querySelector(perentSelector);
    }


    render() {
        const elemInner = document.createElement('div');
        elemInner.classList.add('swiper-slide', 'swiper-slide__popular');
        elemInner.insertAdjacentHTML("afterbegin",
            `
            ${this.sale ? '<div class="swiper-label"><span>SALE</span></div>': ''}
            <svg class="swiper-favorite__icon">
                <use xlink:href="img/sprite/sprite.svg#favorite2"></use>
            </svg>
            <div class="swiper-img">
                <img src=${this.img} alt="${this.alt}" />
            </div>
            ${this.availability ? `<div class="swiper-content">
                    <h4 class="swiper-content__name">${this.title}</h4>
                    <p class="swiper-content__text">нет в наличии</p>
                    <p class="swiper-content__link">Сообщить о поступлении</p>
                </div>` : 
                `<div class="swiper-content">
                    <h4 class="swiper-content__name">${this.title}</h4>
                    <p class="swiper-content__price">
                    ${this.price} <span><i class="fas fa-ruble-sign"></i></span>
                    </p>
                </div>
                <div class="swiper-cart">
                <svg class="swiper-cart__icon">
                    <use xlink:href="img/sprite/sprite.svg#cart"></use>
                </svg>
            </div>`}
            `
        );
        this.parent.append(elemInner);
    }
}

const fetchJSONForSlider = (ulr, parentClass) => {
    fetch(ulr)
        .then(data => data.json())
        .then((res) => {
            for (let key in res) {
                new СreateCard(res[key].sale, res[key].name, res[key].image, res[key].price, res[key].availability, parentClass).render();
            }

        });
};