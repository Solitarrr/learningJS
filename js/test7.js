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
function getCoupeNumber() {

}
