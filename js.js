//easyJS
//HomeWork 1

var S, V, NUMBER_PI = 3.14;
var h = +prompt("Введите значение высоты", 'h');
var r = +prompt("Введите значение радиуса", 'r');

V = NUMBER_PI * r * r * h;
S = 2 * NUMBER_PI * r * (r + h);

document.write("h = " + h + "; " + "r = " + r + "; "
                         + "&Pi; = " + NUMBER_PI + "<hr>");
document.write("Area is equal to : " + S + "<hr>"
                 + "Volume is equal to: " + V + "<hr>" );
