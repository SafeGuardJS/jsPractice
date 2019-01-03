//easyJS
//HomeWork 2
//Task 1
var a = +prompt("Enter first value", '');
var b = +prompt("Enter second value, bigger then first", '');

if (!(a < b)) {
    document.write("Your value is incorrect");
}
for (var i = a + 1; i < b; i++) {
    document.write(i + "&nbsp;");
}
for (var i = a + 1; i < b; i++) {
    if (i % 2 == 1) {
        document.write("<hr>" +  i);
    }
}



