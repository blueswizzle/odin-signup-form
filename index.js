const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phoneNumber')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

const emailError = document.getElementById('email-error')
const phoneError = document.getElementById('phone-error')
const passwordError = document.getElementById('password-error')
const confirmPassError = document.getElementById('confirmPassword-error')

const createAccount = document.querySelector('.create')
const fillError = document.getElementById('fill-error')

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      emailError.textContent = 'Please enter in a valid Email. ex(johnSmith@email.com)';
    } else {
      emailError.textContent = '';
    }
  }); 

  createAccount.addEventListener('click', function(){
    if(firstName.value === ''){
        fillError.textContent = 'Please fill out all the fields!'
    }else{
        fillError.textContent = '';
    }
  });