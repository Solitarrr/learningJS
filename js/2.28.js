//Методы и свойства строк и чисел
//Методы - вспомогательные функции
//Свойства - вспомогательные значения
"use strict";

const str = "teSt";
// const arr = [1, 2, 3];

// console.log(arr.length); //length - это свойство
//Методы вызываются, все пишутся со скобками

//console.dir(Number); // выводит всякие свойства
// console.log(str[2] = 'd'); //не изменит
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

//Поиск подстроки
let fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); //С пятой
console.log(fruit.indexOf("q")); //-1 - вообще нет этого

//Три метода для изменения строки
const logg = "Hello world";

console.log(logg.slice(6, 11)); //до какого-то момента, не включая где конец
console.log(logg.slice(6)); //Если до конца
console.log(logg.slice(-5, -1)); //Справа налево

console.log(logg.substring(6, 11)); //не поддерживает отрицательные числа

//console.log(logg.substr(6, 11)); //говорит сколько символов надо вырезать

//Есть встроенная библиотека в браузере - это Math
const num = 12.2;
console.log(Math.round(num));

const test = "12.2px"; //из строки в число
//console.log(parseInt(test));
console.log(parseFloat(test));
