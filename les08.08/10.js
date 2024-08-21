//? Розробка форми пошуку в google & google map
const check1 = document.getElementById('check'),
    input = document.getElementById('input'),
    btn = document.getElementById('btn');

const url = ['https://www.google.com/search?q=', "http://www.google.com/maps?q="]
let checked = false
btn.addEventListener('click',()=>{
    let m;
    checked?m=url[1]:url[0]
    location.href=m+input.value;
})
check1.addEventListener('input', ()=> {
    check1.checked ? checked = true : checked = false;
    console.log(checked)
})