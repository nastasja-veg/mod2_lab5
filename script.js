// Порядковый номер в списке - 20, всего 7 вариантов -> 20 % 7 = 6, 6 + 1 = 7 -> 
// -> вариант  7

// 7. Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую количество элементов, неравных своему
// предыдущему.

function countNotEqualPrevious(arr) {
    if (arr.length < 2) {
        return 0;
    }

    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            count++;
        }  
    }
    
    return count;

}

const array1 = [4, 9, 2, 1, 5, 3, 7];
const array3 = [3, 3, 6, 6, 6, 7, 7];

console.log("array3:", countNotEqualPrevious(array3));
console.log("array1:", countNotEqualPrevious(array1));

// 7. Напишите функцию, принимающую на вход вещественную
// прямоугольную матрицу и возвращающую одномерный массив,
// состоящий из минимальных элементов соответствующих столбцов
// матрицы.

function minInColumns(matrix) {
    if (matrix.length === 0) {
        return [];
    }

    const cols = matrix[0].length;
    let columnMins = new Array(cols).fill(Infinity);

    for (let j = 0; j < cols; j++) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][j] < columnMins[j]) {
                columnMins[j] = matrix[i][j];
            }
        }
    }

    return columnMins;

}

const matrix1 = [
    [3, 5, 1],
    [2, 4, 7],
    [8, 6, 9]
];

const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let str = "";
        for (let j = 0; j < matrix[i].length; j++) {
            str = str + matrix[i][j] + (j == matrix[i].length - 1 ? "" : ", ")
        }

        console.log(str);

    }
}

console.log("Тестовые матрицы:");
console.log("matrix1 =");


console.log("Матрица 1:", minInColumns(matrix1));
console.log("Матрица 2:", minInColumns(matrix2));