function checkPasswordStrength() {
	var number = /([0-9])/;
	var alphabets = /([a-zA-Z])/;
	var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
	var password = $('#password').val().trim();
	if (password.length < 8) {
		$('#password-strength-status').removeClass();
		$('#password-strength-status').addClass('weak-password');
		$('#password-strength-status').html("Weak (should be atleast 8 characters.)");
	} else {
		if (password.match(number) && password.match(alphabets) && password.match(special_characters)) {
			$('#password-strength-status').removeClass();
			$('#password-strength-status').addClass('strong-password');
			$('#password-strength-status').html("Strong");
		}
		else {
			$('#password-strength-status').removeClass();
			$('#password-strength-status').addClass('medium-password');
			$('#password-strength-status').html("Medium (should include alphabets, numbers and special characters.)");
		}
	}
}

function validatePhoneNumber() {
    // Get and trim phone number input
    const phoneNumber = document.getElementById('phoneNo').value.trim();

    // Regex pattern for 10-digit phone number
    const pattern = /^\d{11}$/;

    // Validate phone number and update message
    
    const isValid = pattern.test(phoneNumber);
    document.getElementById('phoneValidationMsg').textContent = isValid ? '' : 'Please enter a valid 11-digit phone number.';

    if(phoneNumber< 1){
        document.getElementById('phoneValidationMsg').textContent = isValid ? '' : 'Please enter a valid 11-digit phone number.';
    }
    // Return validation status
    return isValid;
}

$(function(){

    $("#confirmpassword").on('keyup', function(){
        var password = $("#password").val();
        var confirmPassword = $("#confirmpassword").val();
        if (password != confirmPassword)
            $("#CheckPasswordMatch").html("Password does not match !").css("color","red");
        else
            $("#CheckPasswordMatch").html("Password match !").css("color","green");
       });
var myInput = document.getElementById("password");
console.log(myInput)
if(myInput!= null){
    var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  
  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  
  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }
}

$('#resend').hide();
})
var today =addMinutes(new Date(), 1);
function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}
function makeTimer(today) {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = today;	
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;
	
            console.log(timeLeft)	
            if(timeLeft >= 0){
                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
      
                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
    
                //$("#days").html(days + "<span>Days</span>");
                //$("#hours").html(hours + "<span>Hours</span>");
                $("#minutes").html(minutes + "<span>Minutes</span>");
                $("#seconds").html(seconds + "<span>Seconds</span>");		
            }else{
                $('#resend').show();
            }
			

	}

    function initTimer(){
       
        setInterval(function() { makeTimer(today); }, 1000);
    }

	