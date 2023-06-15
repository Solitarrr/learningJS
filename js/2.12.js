const arr = ['a', 'b', 'c'];

arr[10] = '3456'; // Пустые данные в массиве, не рекомендуется

console.log(arr[10]); 

const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    abc: {
        df: [{}, {}],
        def: {

        }
    }
};
const b = 'b';


//console.log(arr[1]);

// arrObj.b = '1234';
arrObj['b'] = '1234';

console.log(arrObj['b']); //Если ключ - число, лучше [] скобки. '' - ставятся, чтобы к строке обратиться
console.log(arrObj.b); 

// const obj = {a: 1, b: 2};
const obj = {
    Anna: 500,
    'Alice': 800
};

