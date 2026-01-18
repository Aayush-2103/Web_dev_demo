let LoginPart = document.querySelector('#LoginPart');
let Login_signupButton = document.querySelector('#Login_signupButton');
let SignUpPart = document.querySelector('#SignupPart');
let Signup_loginButton = document.querySelector('#Signup_loginButton')

Login_signupButton.addEventListener('click',()=>{
    currMode = 'signup';
    LoginPart.classList.add('hidden');
    SignUpPart.classList.remove('hidden');
});

Signup_loginButton.addEventListener('click',()=>{
    currMode = 'login';
    LoginPart.classList.remove('hidden');
    SignUpPart.classList.add('hidden');
});