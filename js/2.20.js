"use strict";

if (4 == 9) { //Если просто поставить в условие 1, то это true. 
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49){
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error'); // после вопроса если верно, после двуеточия если не верно
// Это тернарный оператор (?). Сверху три аргумента

//Бинарный аргумент 4+4
//Унарный +'4';

//Есть switch

switch (num) {
    case 49: 
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default: //Если не один из кейсов не выполнились, то по умолчанию можно следующее
        console.log('Не в этот раз');
        break;
}//Можно также ставить в виде строки ''

