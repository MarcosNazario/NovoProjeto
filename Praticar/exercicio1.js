var num1
var num2
var calc


function botao(num) {

    document.exercicio1.visor.value=""
    var salvo = document.exercicio1.visor.value
    document.exercicio1.visor.value = salvo + num
}

function reset() {
    document.exercicio1.visor.value=''

}

function divisao() {
    num1 = document.exercicio1.visor.value
    calc = "/"
    document.exercicio1.visor.value = ''
            
}

function multiplicacao() {
    num1 = document.exercicio1.visor.value
    calc = "*"
    document.exercicio1.visor.value = ''

}

function subtracao(){
    num1 = document.exercicio1.visor.value
    calc = "-"
    document.exercicio1.visor.value = ''
}

function adicao(){
    num1 = document.exercicio1.visor.value
    calc = "+"
    document.exercicio1.visor.value = ''
}

function calculo() {
     var num2 = document.exercicio1.visor.value
     var res = 0
    if(calc=="+"){
         res = parseFloat(num1) + parseFloat(num2)
    }
        
      else if(calc=="-") {
          res = parseFloat(num1) - parseFloat(num2)

      }
      else if(calc=="*") {
        res = parseFloat(num1) * parseFloat(num2)
      }
       
      else{
        res = parseFloat(num1) / parseFloat(num2)
      }
      
    

document.exercicio1.visor.value = res
}