"use strict"

//Работа с массивами и псевдомассивы

const arr = [1, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr); //Отсортировался как строки

//Поэтому надо так
function compareNum(a, b){
    return a - b;
}

//Псевдомассив - объект, похожи на массив. Отличие - нет всех функций массива


// arr[99] = 0; //так не стоит делать, нарушается смысл
// console.log(arr.length); //состоит из последнего элемента + 1
// console.log(arr);
// //Массивы для того, чтобы хранить по порядку
// //но есть исключения

//Больше всего используется for each. Проходится по каждому элементу функции
arr.forEach(function(item, i, arr) {  //i - номер по порядку, //arr  ссылка на массив
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); //Методы - это функция



// // arr.pop(); //Удаляет последний элемент массива
// arr.push(10); //Добавление в конец массива

// console.log(arr); 

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }

const str = prompt("","");
const products = str.split(", ");
products.sort(); //сортирует массив из строки
console.log(products.join('; '));