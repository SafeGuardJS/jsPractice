//easyJS
//HomeWork 5
//Task 2
//Calculator

var firstValue = +prompt("Enter first value", ''),
        operand = prompt("Enter your oparation", ''),
        secondValue =+prompt("Enter second value", '');
        
if (operand == "+") {
    document.write(Show(sum));
} else if (operand == "-") {
    document.write(Show(dif));
} else if (operand == "*") {
    document.write(Show(mul));
} else if (operand == "/") {
    document.write(Show(div));
} else {
    document.write("<h1 style='color:red'> Operand is incorrect </h1>");
}

//==========================================
function Show(callBackFunction) {
    var result = callBackFunction(firstValue, secondValue);

    document.write(firstValue + operand + secondValue + "=");

    return result;        
}

function sum(firstValue, secondValue) {
    return firstValue + secondValue;
}
function dif(firstValue, secondValue) {
    return firstValue - secondValue;
}
function mul(firstValue, secondValue) {
    return firstValue * secondValue;
}
function div(firstValue, secondValue) {
    if (secondValue == 0) {
        document.write("<h1 style='font-weight: bold; color: red;'>Divider can't be equal 0 </h1>" )
    } else {
        return firstValue / secondValue;
    }
}

