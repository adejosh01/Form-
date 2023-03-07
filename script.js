var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var submitError = document.getElementById('submit-error');
var passwordError = document.getElementById('password-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = " Name is required";
        return false;
    }

    nameError.innerHTML = 'valid';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone-Number is required";
        return false;
    }

    phoneError.innerHTML = 'valid';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;
    var mailformat = /\S+@\S+\.\S+/;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(email.match(mailformat)){
        emailError.innerHTML = "Valid";
        return true;
    }
    else{
        emailError.innerHTML = "Invalid"
        return false
    }
}

function validatePassword(){
    var password = document.getElementById('contact-password').value;

    if(password.length == 0){
        passwordError.innerHTML = "Password is required";
        return false;
    }

    passwordError.innerHTML = 'valid';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone() || !validatePassword()){
        submitError.style.display = 'block';
        submitError.innerHTML = "please fix error to submit"
        setTimeout(function(){submitError.style.display = 'none';}, 3000);

        return false;
    }
    submitError.innerHTML = alert("Submitted Successfully")
}