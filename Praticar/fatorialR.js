function fatorialR(n) {
    var n = document.getElementById("num");
    var a;

    if(n == 1) {
        a = 1;
    }
    a =  n * fatorialR(n - 1);
    document.write(fatorial(n));
    res.innerHTML = a;
}
