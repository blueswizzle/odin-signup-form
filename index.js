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

email.addEventListener("input", ()=>{
    if (email.validity.typeMismatch) {
      emailError.textContent = 'Please enter in a valid Email. ex(johnSmith@email.com)';
    } else {
      emailError.textContent = '';
    }
  }); 




phoneNumber.addEventListener("input", ()=>{
  if (phoneNumber.validity.patternMismatch) {
    phoneError.textContent = 'Please enter in a 10 digit phone number';
  } else {
    phoneError.textContent = '';
  }     
});

password.addEventListener("input", ()=>{
  if(password.value === ''){
    passwordError.textContent = 'Enter a password!'
  }else{
    passwordError.textContent = ''
  }
});

confirmPassword.addEventListener("input", ()=>{
  if(confirmPassword.value !== password.value){
    confirmPassError.textContent = 'This password does not match!'
  }else{
    confirmPassError.textContent = '';
  }
});
