(function ($) {
    "use strict";

    // top-progress-bar
    const filled = document.querySelector(".filled");

    function scroll() {
        filled.style.width = `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            }%`;
        requestAnimationFrame(scroll);
    }
    scroll();


    //activity__active
    $('.slide__active').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        speed: 300,
        autoplaySpeed: 3000,
        autoplay: true,
        infinite: true,
    });
    //activity__active
    $('.activity__active').slick({
        dots: true,
        vertical: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        speed: 300,
        smartSpeed: 1000,
        verticalSwiping: true,
    });



})(jQuery);