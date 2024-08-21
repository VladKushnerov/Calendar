let myBtn = document.querySelector('.my-btn');
let myForm = document.querySelector('.my-form');
let formBtn = document.querySelector('.form-btn');

myBtn.addEventListener('click', () => {
    myForm.classList.add('active')
});
formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    myForm.classList.remove('active');
});