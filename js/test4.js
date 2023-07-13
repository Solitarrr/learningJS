// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут

    for (let i = 1; i <= arr.length; i++){
        result[i - 1] = arr[i - 1];
    }
    console.log(result);
    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    // const data = [5, 10, 'Shopping', 20, 'Homework'];

    // // Пишем решение вот тут
    // for (let i = 0; i < data.length; i++){
    //     if (typeof(data[i]) === "number"){
    //         data[i] = data[i] * 2;
    //     } else if (typeof(data[i]) === "string"){
    //         data[i] = `${data[i]} - done`;
    //     }
    // }
    // console.log(data);
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++){
        let value = data[i];
        if (typeof value === "number"){
            data[i] = data[i] * 2;
        } else if (typeof value === "string"){
            data[i] = `${data[i]} - done`
        }
    }
    console.log(data);
    
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    let k = data.length;
    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++){
        result[i] = data[k - 1];
        k--;
    }
    console.log(result);
    
    // Не трогаем
    return result;

    //Второй вариант
    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // for (let i = 1; i <= data.length; i++) {
    //     result[i - 1] = data[data.length - i]
    // }

    // console.log(result);
    // return result;
}