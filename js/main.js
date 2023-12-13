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





})(jQuery);