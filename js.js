//easyJS
//HomeWork 2
//Task 2

var arr = new Array()
var N = +prompt("Enter size of array", '');

arr.length = N;
for (var i = 0; i < N; i++) {
    arr[i] = Math.ceil(Math.random(100) * 100);
}

var Max = arr[0], Min = arr[0], Sum = 0, Middle = 0, arrEvenNumber = [];

for (var i = 0; i < N; i++) {
    if (Max < arr[i]) Max = arr[i];
    if (Min > arr[i]) Min = arr[i];
    if (arr[i] % 2 == 0) arrEvenNumber.push(arr[i]);
    Sum += arr[i];
}
Middle = Sum / N;

document.write("<h1>" + "Initial Array<br/>" + "</h1>" + arr.join(" | ") + "<hr>");
document.write("Minimal value :" + Min + "<br/>Maximum value :" + Max + "<hr>");
document.write("Middel value of array :"+ Middle + "<hr>");
document.write("Sum of array elements :"+ Sum + "<hr>");
document.write("Whole even value :" + arrEvenNumber.join(" | ") + "<hr>");