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

    //slider
    $('.slide__active').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        autoplay: true,
        fade: true,
        slidesToScroll: 1,
        speed: 500,
        cssEase: 'linear'
    });

    //counter up


    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



})(jQuery);