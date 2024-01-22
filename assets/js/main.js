(function($) {
    "use strict";

    /*-------------------------------------
    ** All Functions List **
    0. Lazy load images on page load
    1. API URL 
    2. Initialize onscroll animations
    3. Onboarding steps initialization
    4. Toggle password
    5. History navigation
    -------------------------------------*/

    /*-------------------------------------
    1. On Load
    -------------------------------------*/
    $(window).on('load resize', function() {

        $('body').imagesLoaded().done(function(instance) {
            $('body').addClass('loaded');
        });
    });


})(jQuery);


/*-------------------------------------
1. API URL
-------------------------------------*/
const api_url = 'https://auth.pallywad.com'; 


/*-------------------------------------
2. initialize onscroll animations
-------------------------------------*/
//AOS.init();

/*-------------------------------------
3. onboarding steps initialization
-------------------------------------*/

//onboarding page 1
$('body').on('click','#continue', function(e){

    if($("#step-1").valid()){
        e.preventDefault();
        let email = $('#email').val();
        let password  = $('#password').val();
        let api_endpoint = "/api/v1/Auth/newUser";

        //check email if available
        let data =  {
            "username": email
        }

        console.log(data);

        $.ajax({
            type:'get',
            url: api_url+api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            data: data,
            error: function(d){
                displayErrorToast(d.responseJSON.message, d.responseJSON.status);
            },
            success: function(d){
                console.log(d.status);
                if(d.status=="success"){
                    localStorage.setItem("email", email);
                    localStorage.setItem("password", password);
                    localStorage.setItem("verificationPin", d.message)
                    location.href = "/onboarding-2";
                }
                else {
                    displayErrorToast("Email is already registered to another user", "Error");
                }
                
            }
        })

        
    }
})

//onboarding page 2
$(document).ready(function(){
    $('.pin').segmentedInput({
        // options
        autoSubmit: false,
        fieldClasses: 'pinClass'
    });
});

$('body').on('click', '#verifyEmail', function(e){
    e.preventDefault();
    inputElements = $('.pin').map((i, e) => e.value).get();
    username = localStorage.getItem('email');
    token = inputElements.toString();
    api_endpoint = "/api/v1/Auth/ValidateNewUser";

    //check if token is valid
    let data =  {
        "token": token,
        "username": username
    }

    $.ajax({
        type:'get',
        url: api_url+api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        data: data,
        error: function(d){
            displayErrorToast(d.responseJSON.message, d.responseJSON.status);
        },
        success: function(d){
            console.log(d.status, d.message);
            if(d.status=="success"){
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
                localStorage.setItem("verificationPin", d.message)
                location.href = "/onboarding-3";
            }
            else {
                displayErrorToast("PIN Incorrect!", "Error");
            }
            
        }
    })
})

//onboarding page 3
$('body').on('click', '#submit-onboarding', function(e){
    if($("#step-2").valid()){
        e.preventDefault(); 
        let api_endpoint = '/api/v1/Auth/register';
        let firstname = $('[name=firstname]').val();
        let lastname = $('[name=lastname]').val();
        let othernames = $('[name=othernames]').val();
        let phoneNo = $('[name=phoneNo]').val();
        let email = localStorage.getItem('email');
        let password = localStorage.getItem('password');
        let confirmPassword = password;
        let ssn = "";
        let type = "";

        let data =  {
            "firstname": firstname,
            "lastname" : lastname,
            "othernames": othernames,
            "phoneNo": phoneNo,
            "email": email,
            "password" : password,
            "confirmPassword" : confirmPassword,
            "ssn": ssn,
            "type" : type
        }

        $.ajax({
            type:'post',
            url: api_url+api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            error: function(d){
                toastr.error(d.responseJSON.message, d.responseJSON.status, {
                    timeOut: 5e3,
                    closeButton: !0,
                    debug: !1,
                    newestOnTop: !0,
                    progressBar: !0,
                    positionClass: "toast-top-right",
                    preventDuplicates: !0,
                    onclick: null,
                    showDuration: "300",
                    hideDuration: "1000",
                    extendedTimeOut: "1000",
                    showEasing: "swing",
                    hideEasing: "linear",
                    showMethod: "fadeIn",
                    hideMethod: "fadeOut",
                    tapToDismiss: !1,
                });
            },
            success: function(d){
                console.log(d.status);
                localStorage.removeItem("email");
                localStorage.removeItem("password");
                console.log(d);
            }
        })
    }
})

/*-------------------------------------
4. Toggle password
-------------------------------------*/
$("body").on('click','.toggle-password',function () {
    console.log("toggle clicked");
    $(this).toggleClass("fa-eye-slash fa-eye");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
    input.attr("type", "text");
    } else {
    input.attr("type", "password");
    }
});

/*-------------------------------------
5. History navigation (goBack)
-------------------------------------*/
function goBack(step){
    console.log("gobackclicked");
    window.history.back(-step);
}


function displayErrorToast(message, title){
    toastr.error(message, title, {
        timeOut: 5e3,
        closeButton: !0,
        debug: !1,
        newestOnTop: !0,
        progressBar: !0,
        positionClass: "toast-top-right",
        preventDuplicates: !0,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
        tapToDismiss: !1,
    });
}