$(document).ready(function () {
    $('h1').animate({
        opacity: '1'
    }, 2000);

    /*Плавное появление элементов*/
    let windowHeigt = $(window).height();
    let windowScrollPosTop = $(window).scrollTop();
    let windowScrollPosBottom = windowHeigt + windowScrollPosTop;

    jQuery.fn.revealOnScroll = function () {

        return this.each(function () {

            let objectOffset = $(this).offset();
            let objectOffsetTop = objectOffset.top;
            if (!$(this).hasClass('hidden')) {
                $(this).css("opacity", 0).addClass('hidden');
            }

            if (!$(this).hasClass('animationComplit')) {
                if (windowScrollPosBottom > objectOffsetTop) {
                    $(this).animate({
                        "opacity": 1
                    }, 2000).addClass('animationComplit');
                }
            }

        });
    };
    $(window).scroll(function () {
        windowHeigt = $(window).height();
        windowScrollPosTop = $(window).scrollTop();
        windowScrollPosBottom = windowHeigt + windowScrollPosTop;

        $('.Tribuna').revealOnScroll();
        $('.Naves').revealOnScroll();
        $('.Teleskop').revealOnScroll();
        $('.Podyom').revealOnScroll();
        $('.Kabinka').revealOnScroll();
        $('.Mobile').revealOnScroll();


    });
});