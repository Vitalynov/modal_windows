
/*-- Добавление дополнительных карточе (фото и т.д.) к существующим.--*/
const showMoreWorks = (trigger, works) => {
    const carts = document.querySelectorAll(works),
        btn = document.querySelector(trigger);

    carts.forEach(cart => {
        cart.classList.add('fadeInUp');
    });

    btn.addEventListener('click', () => {
        carts.forEach(cart => {
            cart.classList.remove('works-box__none');
        });
        btn.remove();
    });

};
showMoreWorks('.js-works-btn', '.js-works');