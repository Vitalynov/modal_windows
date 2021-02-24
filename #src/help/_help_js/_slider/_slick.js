// http://kenwheeler.github.io/slick/
//video на 1ч24м: https://www.youtube.com/watch?v=qWWoIPLSeec&t=159s

const slider = (name, next, prev) => {
    $(function () {
        $(name).slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: next,
            prevArrow: prev,
            responsive: [{
                    breakpoint: 1024,
                    settings: {

                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false //на разрешении 640px и ниже nextArrow: и prevArrow: показываться не будут.
                    }
                }

            ]
        });
    });
};

slider('.baner-slider', '<button type="button" class="slick-arrow slick-next"><img src="img/next.svg" alt="next"></button>', '<button type="button" class="slick-arrow slick-prev"><img src="img/prev.svg" alt="prev"></button>');
slider('.comments-slider', '', '');