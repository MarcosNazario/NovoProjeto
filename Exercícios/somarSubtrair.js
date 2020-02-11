function somar() {
    var a = document.getElementById("texto");
    var b = Number(a.value);
    var c = b + 1;
    a.value = c;
}

function subtrair() {
    var a = document.getElementById("texto");
    var b = Number(a.value);
    var c = b - 1;
    a.value = c;
}
