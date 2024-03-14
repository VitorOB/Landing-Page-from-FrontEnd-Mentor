const btnRegister = document.querySelector('.btn__register');
const btn__submit = document.querySelector('.btn__submit');
const form = document.querySelector('.form');
const mascara = document.querySelector(".mascara-form");
const inputs = document.querySelector(".form__input");


function formRegister(){
    form.style.top = '35%';
    mascara.style.visibility = 'visible';
}
btnRegister.addEventListener('click', formRegister);


mascara.addEventListener('click', () => {
    mascara.style.visibility = 'hidden';
    form.style.top = '-245px';
})