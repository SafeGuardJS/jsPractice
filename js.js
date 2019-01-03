//easyJS
//HomeWork 2
//Task 2

var star = "*", nbsp = "&nbsp";

for (var i = 0; i < 5; i++) {
    if ( i == 0 || i == 4){
        for ( var j = 0; j < 20; j++) {
            document.write(star);
        }
    }else{
        for ( var j = 0; j < 20; j++) {
            if ( j == 0 || j == 19){
                document.write(star);
            }else {
                document.write(nbsp + nbsp);
            }
        }
    }    
    document.write("<br/>");
}

document.write("<hr>");
for (var i = 0; i < 10; i++) {
    for ( var j = 0; j < i; j++) {
        document.write(star);
    }    
    document.write("<br/>");
}

document.write("<hr>");




