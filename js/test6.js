// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    let arr = [num - 1, num, num + 1];
    return arr;
}

// Место для третьей задачи
function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <=0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++){
        if (i === times) {
            str += `${num * i}`;
            //Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            //Это тоже самое, что и str = str + num * i + "---"
        }
    }
    return str;
}
console.log(sayHello('Антон'));
console.log(returnNeighboringNumbers(5));
console.log(getMathResult(10,5));