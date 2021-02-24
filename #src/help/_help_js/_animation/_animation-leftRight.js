$(function () {

    let windowHeigt = $(window).height(),
        windowScrollPosTop = $(window).scrollTop(),
        windowScrollPosBottom = windowHeigt + windowScrollPosTop;


    /*Бокс анимации*/
    jQuery.fn.revealOnScroll = function (direction) {

        return this.each(function () {

            let objectOffset = $(this).offset(),
                objectOffsetTop = objectOffset.top;

            if (!$(this).hasClass('hidden')) {
                if (direction == "right") {
                    $(this).css({
                        "opacity": 0,
                        "transform": "translateX(300px)",
                        "transition": '2s'
                    });
                } else if (direction == "left") {
                    $(this).css({
                        "opacity": 0,
                        "transform": "translateX(-300px)",
                        "transition": '2s'
                    });
                } else if (direction == "down") {
                    $(this).css({
                        "opacity": 0,
                        "transform": "translateY(-50px)",
                        "transition": '2s'
                    });
                } else if (direction == "up") {
                    $(this).css({
                        "opacity": 0,
                        "transform": "translateY(50px)",
                        "transition": '2s'
                    });
                } else {
                    $(this).css({
                        "opacity": 0,
                        "transition": '3s'
                    });
                }

                $(this).addClass('hidden');
            }

            if (!$(this).hasClass('animationComplit')) {
                if (windowScrollPosBottom > objectOffsetTop) {
                    $(this).css({
                        "opacity": 1,
                        "transform": "translateX(0)"
                    }, 2000).addClass('animationComplit');
                    /*$(this).animate({"opacity" : 1, "right" : 0}, 2000).addClass('animationComplit');*/
                }
            }
        });
    };



    $(window).scroll(function () {
        windowHeigt = $(window).height();
        windowScrollPosTop = $(window).scrollTop();
        windowScrollPosBottom = windowHeigt + windowScrollPosTop;
        /*-- Применяются классы анимации ("left", "right", "down", "up", "appear")-*/
        $('.about-content__titele').revealOnScroll("right");
        $('.titele-h2').revealOnScroll("left");
        $('.footer-production').revealOnScroll("left");
        $('.footer-address').revealOnScroll("up");
        $('.footer-contacts').revealOnScroll("right");
        $('.text').revealOnScroll("appear");
        $('.tribunes-content__item').revealOnScroll("appear");
        $('.seats-content__item').revealOnScroll("appear");
        $('.armchairs-content__item').revealOnScroll("appear");
        $('.gallery-item').revealOnScroll("appear");
        $('.contacts-form').revealOnScroll("appear");
        $('.mymap').revealOnScroll("appear");
    });

});