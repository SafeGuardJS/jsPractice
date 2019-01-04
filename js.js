//easyJS
//HomeWork 3
//Task 2

var col, row, Arr = new Array();

col = +prompt("Enter a number of colmns :", '');
row = +prompt("Enter a number of rows :", '');

for ( var i = 0; i < row; i++ ) {
    Arr[i] = new Array(col);
}
for ( var i = 0; i < row; i++ ) {
    for (var j = 0; j < col; j++ ) {
        Arr[i][j] = Math.ceil(Math.random() * 9);
        document.write(Arr[i][j] + "&nbsp;");
    }
    document.write("<br/>");
}
document.write("<hr>");
for (var i = 0; i < col; i++) {
         Arr[i][i] = 0;
         for( var j = row - 1; j >= 0; j--) {
             Arr[j][j] = 0;
             document.write(Arr[i][j] + "&nbsp;");
         }
         document.write("<br/>");
}