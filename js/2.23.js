//Цикл в цикле и метки
for (let i = 0; i < 3; i++){ // Вложенный цикл
    console.log(i);
    for (let j = 0; j < 3; j++){
        console.log(j);
    }
}

//Астерикс
// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) { //высота
    for (let j = 0; j < i; j++){
        result += "*";
    }

    result += '\n';//перенос строки
}

console.log(result);

// first: for (let i = 0; i < 3; i++){ // Вложенный цикл
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++){
//             if (k === 2) continue first; // метка ставится
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

first: for (let i = 0; i < 3; i++){ // Вложенный цикл
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++){
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++){
            if (k === 2) break first; // метка ставится
            console.log(`Third level: ${k}`);
        }
    }
}
// — break – прерывает выполнение цикла, и управление передается операторам, следующим за оператором цикла;
// — continue – прерывает выполнение очередного шага (итерации) цикла и возвращает управление в начало цикла, начиная следующий шаг (итерацию).