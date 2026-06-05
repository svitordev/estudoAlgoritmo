function saudacao(name){
    if(typeof name !== "string"){
        throw new Error("O parâmetro precisa ser letras.")
    }

    return `Bem vindo, ${name}!`
}
module.exports = saudacao;