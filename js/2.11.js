"use strict";

//Числа
let number = 4.6; // inf - при делении на ноль, NaN - мат. операция без логики

console.log(4/0); // infinity
console.log('string' * 9); // NaN

//Строка
const persone = "Alex"; // '5' - это будет строка

//Логический тип
const bool = true; //либо false

//null
console.log(something); //Не объявляли

//undefined
let und;
console.log(und); //undefined

////////////////////////////////////////
const obj = { //Коллекция данных
    name: "John", //name - это ключ, John - значение
    age: 25,
    isMarried: false
};

// console.log(obj.name);
console.log(obj["name"]);

//Массив - это частный случай объекта (не тип данных)
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1])