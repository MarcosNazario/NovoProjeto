function acesso(){
    var usuario = form.usuario.value;
    var senha = form.senha.value;

    if(usuario == 'Marcos' && senha == '1234'){
        window.location.assign("Tela_de_Login1.html");
    }
    else{
        alert("Usuário ou senha invalido, tente novamente!");
    }
}

function sair(){
    window.location.assign("Tela_de_Login.html");
}