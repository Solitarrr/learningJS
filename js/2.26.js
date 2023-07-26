//Про аргументы
const usdCurr = 28;
const eurCurr = 32;
//Принцип DRY - don't repeat yourself
function convert (amount, curr) { //Функция более универсальна
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);