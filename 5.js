console.clear();
//!Змінна та константа
let a = 5
console.log(typeof(a),a);
a=6
console.log(typeof(a),a)
const a1 = 7
console.log(typeof(a1),a1)

//! Типи даних
//? undefind,null,number, string, arr
a = '5'
console.log(typeof(a),a+a)
a = [11,42,33,44,55]
console.log(typeof(a),a,a[4])


//! Арифметичні операції
//? + - / % ** * ++ --
console.log(2+2)
console.log(2-2)
console.log(2/2)
console.log(2%2)
console.log(2**3)
console.log(2*3)



//* Визнач скільки буде 2 в 5 степені та 2 в 15 степені
let x = 2, y=5;
console.log(x**y)
let p = 2, b = 15;
console.log(p**b)

//* Обрахуй значення рівняння x^2+2xy+y^2
let x=5, y=6;
console.log(x**2+2*x*y+y**2)
if (!true){
console.log('так')
}else{
    console.log('ні')
}
!true && console.log('ні')
!true ? console.log('так') : console.log('ні');

//* Напишіть програму, яка перевіряє, чи число парне чи непарне.
a = 4
console.log(a%2==0)
a%2==0 && console.log("Парне число")
if(a%2==0){
    console.log("Парне число")
//}else{
//    console.log("Не Парне число")
//}
a%2==0 ? console.log("Парне число") : console.log("Не Парне число")
//* Створіть програму, яка визначає, чи є введене число додатним, від'ємним чи нулем.

//* Напишіть програму, яка обчислює площу прямокутника за його довжиною і шириною.
let sh= 5, h = 6;
console.log(1/2*sh*h)

//* Створіть програму, яка перевіряє, чи є введене число кратним 3 або 5.
x = 13;
x%3==0 && x%5==0 && console.log(x)
//alert('Вхід заборонено!')
////? Alert (Попередження):
////? Використовується для відображення повідомлення користувачу з кнопкою "OK". Наприклад:
////? window.alert("Це попередження!");
////? Prompt (Запит):
////? Використовується для отримання введеного користувачем значення. Він також має кнопки "OK" і "Cancel". Наприклад:
////? let result = window.prompt("Будь ласка, введіть своє ім'я", "Гість");
////? Confirm (Підтвердження):
////? Використовується для підтвердження або скасування дії користувачем. Має кнопки
//x = confirm("Підтвердити вхід")
//x = prompt("Введи своє ім'я")
//console.log(x)
const data = {
    login: "1",
    password: "1",
}
data.login ===prompt('Введіть логін')&& data.passssword === prompt('ВВедіть Пароль')
    ? alert('Авторизація успішна') : location.href = 'https://www.google.com/';