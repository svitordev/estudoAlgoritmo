function verificarSenha(senha){
    const senhaBD = "1234";
    if(senha === senhaBD){
        console.log("Acesso liberado!")
    }else{
        console.log("Senha incorreta!")
    }
}
verificarSenha("1234");
verificarSenha("12345");