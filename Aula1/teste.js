function dados() {

    var usuario = window.prompt("Digite seu nome")
    var senha = window.prompt("Digite sua senha")

    if(usuario == "marcos" && senha == "1234") {

        alert("Acesso Permitido")
    }

    else {

        alert("Acesso Negado")
    }
}