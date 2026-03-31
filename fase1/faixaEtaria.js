function faixaEtaria(idade){
    if(idade <= 12){
        console.log("É uma criança!")
    } else if(idade >= 13 && idade <= 17){
        console.log("É um adolescente!")
    } else {
        console.log("É um adulto!")
    }
}

faixaEtaria(9)
faixaEtaria(17)
faixaEtaria(27)
