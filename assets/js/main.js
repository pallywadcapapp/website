(function($) {
    "use strict";

    /*-------------------------------------
    ** All Functions List **
    0. API URL 
    1. Lazy load images on page load
    2. Initialize onscroll animations
    3. Onboarding steps initialization
    -------------------------------------*/

    /*-------------------------------------
    0. API URL
    -------------------------------------*/
    const api_url = ''; 

    /*-------------------------------------
    1. On Load
    -------------------------------------*/
    $(window).on('load resize', function() {

        $('body').imagesLoaded().done(function(instance) {
            $('body').addClass('loaded');
        });
    });

    /*-------------------------------------
    2. initialize onscroll animations
    -------------------------------------*/
    // AOS.init();

    /*-------------------------------------
    3. onboarding steps initialization
    -------------------------------------*/
    var current_step = 1;
    if($('onboarding-forms').length > 0) {
        initializeForms(current_step);
    }

    function initializeForms(current_step){
        console.log("initialization happend");
        $('#step-1').hide();
        $('#step-2').hide();
        $('#step-'+current_step).show();
    }

    //validations
    $('body').on('click','#continue-1', function(e){
        if($("#step-1").valid()){
            e.preventDefault();
            current_step = 2;
            initializeForms(current_step);
        }
    })

})(jQuery);