



function calcular(n) {
    var a;
    var n = document.getElementById("texto").value;
    if (n === 0) {
        a = 1;
    }
    else if (n === 1) {
        a = 1;
    }
    else {
        a = n * calcular(n - 1);
    } document.getElementById("texto1").value = a;
} 






