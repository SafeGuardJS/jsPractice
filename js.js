//easyJS
//HomeWork 5
//Task 1
//Function(Basic)


Show(middleValue, 3, 3, 3);


//============================
function middleValue(firstValue, secondValue, thirdValue) {
    return (firstValue + secondValue + thirdValue) / arguments.length;
}

function Show(callBackFunction, firstValue, secondValue, thirdValue) {
  alert(callBackFunction(firstValue, secondValue, thirdValue));
}

