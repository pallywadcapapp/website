(function($) {
    "use strict";


    /*-------------------------------------
    On Load
    -------------------------------------*/
    $(window).on('load resize', function() {

        $('body').imagesLoaded().done(function(instance) {
            $('body').addClass('loaded');
        });
    });

    /*-------------------------------------
    initialize onscroll animations
    -------------------------------------*/
    AOS.init();

    





})(jQuery);