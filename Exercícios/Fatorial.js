

function fatorial(n) {
    var n = document.getElementById("texto").value;
    var result = 1;
    for (var i = n; i > 1; i--) {
        result = result * i;
        
    }
    document.getElementById("texto1").value = result;
    
}


