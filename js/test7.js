// Место для первой задачи
function calculateVolumeAndArea(edge) {
    if (typeof (edge) !== 'number' || edge < 0 || !Number.isInteger(edge)) {
        return 'При вычислении произошла ошибка';
    } 
    
    let V = edge * edge * edge;//можно заменить на степень, просто проверка на сайте ругается
    let S = 6 * edge * edge;
    
    return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
     
}

//calculateVolumeAndArea(5);

// Место для второй задачи
function getCoupeNumber(seat) {
    if (typeof (seat) !== 'number' || seat < 0 || !Number.isInteger(seat)){
        return "Ошибка. Проверьте правильность введенного номера места";  
    } else if (seat === 0 || seat > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        return Math.ceil(seat / 4);
    }
}

getCoupeNumber(33);