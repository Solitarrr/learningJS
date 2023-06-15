"use strict";

console.log('arr' + ' - object');
// console.log(4 + ' - object');
console.log(4 + +'5'); //Унарный плюс - плюс перед чем-то, т.к. 1 аргумент использует

let incr = 10,
    decr = 10;

//Постфиксный
incr++; //инкримент (увеличение на единицу)
decr--; //декримент (уменьшение на единицу)

console.log(incr);
console.log(decr);

//Префиксный
++incr;
--decr;
//Если в console.log(incr++), то выводит сперва старое значение, потом добавляет единицу
//Если в console.log(++incr), то сразу выводит новый результат

console.log(5%2); //Остаток

//Одно равно - присваивание
//Два равно - сравнение

console.log(2*4 == 8); //8 true
console.log(2*4 == '8'); //8 true
console.log(2*4 === '8'); //Строгое сравнение. false

//Оператор и - &&. Два и более - правдивы
//Оператор или - ||. Когда хотя бы один правдив

const isChecked = true,
      isClose = false;
console.log(isChecked && isClose);
console.log(isChecked || !isClose);
// Оператор отрицания - !

//Порядок выполнения
console.log(2 + 2 * 2 === '8'); //false
console.log(2 + 2 * 2 != '8'); //true
console.log(2 + 2 * 2 !== '6'); //true Строгий