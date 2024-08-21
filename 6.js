//?Створення масиву
const product = [
    {id:1, name:"nameProduct 1"},
    {id:1, name:"nameProduct 1"},
    {id:1, name:"nameProduct 1"},
    {id:1, name:"nameProduct 1"},
    {id:1, name:"nameProduct 1"},
]
const p = Array.from(document.getElementsByTagName('p'));
console.log(product)
console.log(p)
let arrOne = [1,2,3,4,5,6,[7,8]]
console.log(arrOne[6][0])
arrOne[6][2] = 9 
arrOne[0] = 0
console.log(arrOne)
arrOne.push({name: "nameProduct 1", password:"123"})
console.log(arrOne)
let newUser = arrOne.pop()
console.log(newUser)
//?Задавання значень масиву
//?Визначення елемента масиву по індексу
const arr2 = [1,2,3,4,[5,6,7,[9,10]]]
console.log(arr2[4][1])
console.log(arr2[4][3][0])
//?Зміна значень елементу в масиві
let arr10 = ['1', '2', '3'];
arr10[1] = '5';
console.log(arr10);
//?Додавання в кінець елементу
//let arr2 = [1,2,3,4,5]
//let arr3 = [6,7,8,9,0]
//let arr4 = [...arr2, ...arr3]
//console.log(arr4)


//?Обєднання декількох масивів
let array11 = [1, 2, 3];
let array12 = [4, 5, 6];
let array13 = [7, 8, 9];
array11.push(...array12, ...array13);
console.log(array11); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


//!Методи обходу масивів  - прототипи - функції
//?forEach(): Виконує задану функцію один раз для кожного елемента масиву.
//arr4.forEach((item,index)=>{
//    console.log(item)
//})
//console.clear()
//console.log(arr4)
//let arr5 = arr4.forEach((item,index)=>item%2==1?item:"")
//console.log(arr5)
//?map(): Створює новий масив, який містить результат виклику заданої функції для кожного елемента масиву.
//*Оновлює дані масиву
//arr4.map((item,index)=>{
//    console.log(item)
//})
//let arr6 = arr4.map((item,index)=>item,%2==1&&item)
//console.log(arr6)
//?filter(): Створює новий масив, який містить елементи, для яких задана функція повертає true.
let arr6 = arr4.filter(item=>item%2==1)
console.log(arr6)


//?find(): Повертає перший елемент масиву, для якого задана функція повертає true.
v.find((element,index)=>element==8&&console.log(element,index))

//?reduce(): Застосовує задану функцію до кожного елемента масиву, редагуючи її до одного значення.
//* Тяжке для розуміння, перша змінна використовується для підрахунку, друга це елемент масиву
let s = 0 
arr4.forEach(item=>s+=item)
console.log(s)
console.log(arr4.reduce((item,s)=>s+=item)/arr4.length)

//?sort(), але можна також реалізувати інші алгоритми сортування вручну. 
//?Метод sort() сортує елементи масиву і змінює сам масив.
let arr7 = [11,2,3,4,0]
arr7.sort((a,b)=>b-a)
console.log(arr7)