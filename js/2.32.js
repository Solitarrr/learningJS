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
    }
};

// console.log(options.name); //либо вместо точки квадратные скобки

// delete options.name; //удалить свойство

// console.log(options);

//прямых констант не работает

//for in
for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}