//Declaramos variables
var opera;
var operb;
var oper;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var soma = document.getElementById('soma');
    var subtrai = document.getElementById('subtrai');
    var multiplica = document.getElementById('multiplica');
    var divide = document.getElementById('divide');
    var igual = document.getElementById('igual');
    var um = document.getElementById('um');
    var dois = document.getElementById('dois');
    var tres = document.getElementById('tres');
    var quatro = document.getElementById('quatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var sete = document.getElementById('sete');
    var oito = document.getElementById('oito');
    var nove = document.getElementById('nove');
    var zero = document.getElementById('zero');
  }

  //Eventos de click
  um.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dois.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
quatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
sete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
oito.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nove.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
zero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetar();
}
soma.onclick = function(e){
    opera = resultado.textContent;
    oper = "+";
    limpar();
}
subtrai.onclick = function(e){
    opera = resultado.textContent;
    oper = "-";
    limpar();
}
multiplica.onclick = function(e){
    opera = resultado.textContent;
    oper = "*";
    limpar();
}
divide.onclick = function(e){
    opera = resultado.textContent;
    oper = "/";
    limpar();
}
igual.onclick = function(e){
    operb = resultado.textContent;
    resolver();
}

function limpar(){
    resultado.textContent = "";
  }
  function resetar(){
    resultado.textContent = "";
    opera = 0;
    operb = 0;
    oper = "";
  }

  function resolver(){
    var res = 0;
    switch(oper){
      case "+":
        res = parseFloat(opera) + parseFloat(operb);
        break;
      case "-":
          res = parseFloat(opera) - parseFloat(operb);
          break;
      case "*":
        res = parseFloat(opera) * parseFloat(operb);
        break;
      case "/":
        res = parseFloat(opera) / parseFloat(operb);
        break;
    }
    resetar();
    resultado.textContent = res;
    
  }