//Declaramos variables
var opera
var operb
var oper



  //Eventos de click
 

um.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1"
}
dois.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2"
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3"
}
quatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4"
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5"
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6"
}
sete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7"
}
oito.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8"
}
nove.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9"
}
zero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0"
}
reset.onclick = function(e){
    resetar()
}
adicao.onclick = function(e){
    opera = resultado.textContent
    oper = "+"
    substituir()
    
}
subtracao.onclick = function(e){
    opera = resultado.textContent
    oper = "-"
    
}
multiplicacao.onclick = function(e){
    opera = resultado.textContent
    oper = "*"
    
}
divisao.onclick = function(e){
    opera = resultado.textContent
    oper = "/"
    
}
igual.onclick = function(e){
    operb = resultado.textContent
    resolver()
}


function limpar(){
    resultado.textContent = ""
  }
  function resetar(){
    resultado.textContent = ""
    opera = 0
    operb = 0
    oper = ""
  }

  function resolver() {
    
    var res = 0
    if(oper=="+"){
        res = parseFloat(opera) + parseFloat(operb)
    }
       
    else if(oper=="-") {
         res = parseFloat(opera) - parseFloat(operb)

    }
    else if(oper=="*") {
       res = parseFloat(opera) * parseFloat(operb)
    }
      
    else{
       res = parseFloat(opera) / parseFloat(operb)
    }
    resetar();
    resultado.textContent = res
}

    
    
  