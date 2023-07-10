//Логические операторы - или, и, не
const hamburger = true;
const fries = true;

if(hamburger && fries) { //логическое и
    console.log('Я сыт!');
}

console.log((hamburger && fries)); //true

// const hamburgerNum = 5;
// const friesNum = 0;

// if(hamburgerNum && friesNum) { //логическое и
//     console.log('Я сыт!');
// }

// null; ''; null; undefined, NaN - это false всегда

// const hamburgerNum = 3;
// const friesNum = 1;
// const cola = 0;
// //будет выдавать значения, а не правда или ложь
// console.log(hamburgerNum === 3 && cola && friesNum);

// console.log(1 && 0);
// console.log(1 && 5); //возвращает последнее значение, то есть 5
// console.log(null && 5);
// console.log(0 && 'afsafsfafsa');

// if (hamburgerNum === 3 && cola === 1 && friesNum) { 
//     console.log('Все сыты');
// } else {
//     console.log('Мы уходим');
// }

//И (&&) ЗАПИНАЕТСЯ НА ЛЖИ, А ИЛИ (||) НА ПРАВДЕ

const hamburgerNum = 3;
const friesNum = 3;
const cola = 0;
const nuggets = 2;

if (hamburgerNum === 3 && cola === 2 || friesNum === 3 && nuggets) { 
    console.log('Все довольны!');
} else {
    console.log('Мы уходим');
}

console.log(hamburgerNum === 3 && cola === 2 || friesNum === 3 && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);

//ТЕСТИРОВАНИЕ
console.log( NaN || 2 || undefined ); // 2
console.log( NaN && 2 && undefined ); // NaN
console.log( 1 && 2 && 3 ); // 3
console.log( !1 && 2 || !3 ); // false
console.log( 25 || null && !3 ); // 25
console.log( NaN || null || !3 || undefined || 5); // 5
console.log( NaN || null && !3 && undefined || 5); // 5
console.log( 5 === 5 && 3 > 1 || 5); // true

const hamburgerTask = 3;
const friesTask = 3;
const colaTask = 0;
const nuggetsTask = 2; 

if (hamburgerTask === 3 && colaTask || friesTask === 3 && nuggetsTask) {
   console.log('Done!')
}

let hamburgerTest; //там undefined
const friesTest = NaN;
const colaTest = 0;
const nuggetsTest = 2;


if (hamburgerTest || colaTest || friesTest === 3 || nuggetsTest) {
   console.log('Done!')
}
console.log(hamburgerTest || colaTest || friesTest === 3 || nuggetsTest); // 2