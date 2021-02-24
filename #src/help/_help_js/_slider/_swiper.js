new Swiper('.swiper-container', {
    //стрелки
    navigation: {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev",
    },
    //Точки
    pagination: {
        el: "swiper-pagination",
        type: 'bullets',
        clickable: true,
    },
    //автопереключение
    autoplay: {
        //пауза
        delay: 3000,
        //отключить во время ручного управления
        disableOnInteraction: false,
    },
    //циклическое пролистывание
    loop: true,
    //количество слайдов для показа
    slidesPerView: 1,
    spaceBetween: 0,
    //количество пролистываемых слайдов
    slidesPerGroup: 1,
    //автоматическое отключение слайдера, если слайдов недостаточно
    watchOverflow: true,
    //обновление Swiper
    //при изменении элементов слайдера
    observer: true,
    //при изменении родительских элементов
    observerParents: true,
    //при изменении дочерних элементов
    observerSlideChildren: true,

});


/*-

<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>

    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>

-*/