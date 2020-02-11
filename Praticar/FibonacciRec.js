function fibo(m) {

    var n = parseInt(m);

    

    if (n === 1) {
         return 1;
    
    }
    else if (n === 2) {
        return 1;
    
    }
    else {
        
        return fibo(n - 1) + fibo(n - 2);
        
    }

    
    
}


function calcularFibo(){
    var m = jQuery('#texto').val();

    $('#res').text( fibo(m) );
}
