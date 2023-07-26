//Про return
const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

//Принцип DRY - don't repeat yourself
function convert (amount, curr) { //Функция более универсальна
    //console.log(curr * amount);
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
    //Компонент высшего порядка
    // return function(){}
}

// convert(500, usdCurr);
// convert(500, eurCurr);

// promotion(convert(500, usdCurr));

const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++){
        console.log(i);
        if (i === 3) return //break бы прекратил работу цикла, return вообще всей функции
    } //return вернет undefined. Любая функция она что-то возвращает, обычно это undefined
    console.log('Done');
}

test(); //Функция прекратила свою работу

//тест
function doNothing() {};
console.log(doNothing() === undefined);
//это функция. console - это объект, log - его метод. Функция записана в объект. Так как функция, то возвращает undefined
//Перед return не ставить enter