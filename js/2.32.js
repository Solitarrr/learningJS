//Объекты и деструктуризация объектов
//Объекты - ассоциативные массивы

"use strict";

// const obj = new  Object(); //Устаревшая

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { //Создали метод
        console.log("Test");
    }
};

options.makeTest();
// console.log(options.name); //либо вместо точки квадратные скобки
//console.log(options["colors"]["border"]);


// delete options.name; //удалить свойство

// console.log(options);

//прямых констант не работает

// let counter = 0;
// //for in
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             //counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);
//есть for of, но не работает для объекта

//object keys
// console.log(Object.keys(options));//метод, перечисляющий ключи
// console.log(Object.keys(options).length);

//Объект - структуры ключ значения с любыми типами данных. Могут быть вложенными. Чтобы перебрать используеим for in, а также получать свойства через скобки можно. Чтобы объект умел что делать можно записывать ему функции, тем самым создавать ему методы.
//Есть аксессоры - геттеры и сеттеры. В ES6 появилась деструктуризация. Когда надо достучаться до свойств.
//Деструктуризация
const {border, bg} = options.colors; //вытащили в переменные
console.log(border);