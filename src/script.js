
let failureMessage = document.querySelector(".failure-message");
let successMessage = document.querySelector(".success-message");
let inputUsername = document.querySelector("#username");
let password = document.querySelector(".password");
let password2 = document.querySelector(".password2");
let check = document.querySelector(".check")

inputUsername.onkeyup = function(){
  if(isMoreThan4Length(inputUsername.value)){
    successMessage.classList.remove('hide')
    failureMessage.classList.add('hide')
  }
  else{
    successMessage.classList.add('hide')
    failureMessage.classList.remove('hide')
}
}
password2.onkeyup = function(){
  if(isMatch(password.value,password2.value)){
    check.classList.add('hide')
  }
  else{
    check.classList.remove('hide')
  }
}

function isMoreThan4Length(value) {
  return value.length>=4
  }



function isMatch(password1, password2) {
  if(password1 === password2){
    return true
  }
  else{return false}
}
