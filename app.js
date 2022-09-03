const inputEmail = document.getElementById('email');
const btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    validateEmail(inputEmail.value);
});

function validateEmail(email) {
    let expReg =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (expReg.test(email) == true) {
        inputEmail.style.border = "1px solid var(--blue)";
        error.style.visibility = "hidden";
        inputEmail.value = ''; 
    } else {
        inputEmail.style.border = "1px solid var(--lightRed)";
        error.style.visibility = 'visible';
    }
   ;
}