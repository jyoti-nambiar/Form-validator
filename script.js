const submitBtn = document.getElementById("submitBtn");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmPass");
const form = document.getElementById("form");
// Error function
function showError(input, message) {

    const formControl = input.parentElement;
    formControl.className = "formControl error";
    const small = formControl.querySelector("small");
    small.innerText = message;

}

//Success function
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "formControl success";
}

//Email validation function
function validateEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }
    else {
        showError(input, "Email is invalid");


    }
};

//Check is valiue exist or not
function checkRequired(inputArray) {

    inputArray.forEach(function (input) {

        if (input.value.trim() == '') {
            showError(input, `${getInputValue(input)} is required`);
        }
        else {
            showSuccess(input);
        }

    });


}


//Capitalization function

function getInputValue(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}



//function to check length
function checkLength(input, min, max) {

    if (input.value.trim().length < min) {
        showError(input, `${getInputValue(input)} length should be minimum ${min} characters`);


    } else if (input.value.trim().length > max) {

        showError(input, `${getInputValue(input)} length should be maximum ${max} characters`);
    }
    else {
        showSuccess(input);
    }



}



function passwordMatch(input1, input2) {
    if (input1.value !== input2.value) {

        showError(input2, "Passwords does not match");


    }
}


submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    checkRequired([username, email, password, confirmPass]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    validateEmail(email);
    passwordMatch(password, confirmPass);
});