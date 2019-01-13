//easyJS
//HomeWork 6
//Task 1
//Object

let Matrix = getMatrix(3, 5, 0, 10),
    vector = getVector(3, 0, 10),
    resul;

printMatrix(Matrix, 3, 5);
document.write("<hr>" + vector.join(" ")); 
resulst = calculateMul(Matrix, vector, 3, 5);
document.write("<hr>" + resulst.join(" "));





//=========================================

function getMatrix(row, col, min, max) {
    var Matrix = new Array(row);

    for(let i = 0; i < row; i++) {
        Matrix[i] = new Array(col);
    }

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            Matrix[i][j] = getRandom(min, max);
        }
    }

    return Matrix;
} 

function printMatrix(Matrix, row, col) {
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            document.write(Matrix[i][j] + " ");
        }
        document.write("<br />");
    }
}

function getVector(row, min, max) {
    let vector = new Array(row);

    for(let i = 0; i < row; i++) {
        vector[i] = getRandom(min, max);
    }

    return vector;
}

function getRandom(min, max) {
    return Math.ceil(10 * Math.random()) * (max - min + 1) + min;
}

function calculateMul(Matrix, vector, row, col) {
    let result = new Array(col);
    for(let i = 0; i < col; i++) {
        result[i] = 0;
    }

    for(let i = 0; i < col; i++) {
        for(let j = 0; j < row; j++) {
            result[i] += Matrix[j][i] * vector[j];
        }
    }

    return result;
}
