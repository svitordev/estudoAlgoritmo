function classificacao(nota){
    if(nota >= 0 && nota < 5){
        console.log("Insuficiente");
    } else if(nota >= 5 && nota < 7){
                console.log("Regular");

    }else if(nota >= 7 && nota < 9){
                console.log("Bom");

    } else if(nota >= 9 && nota <= 10){
                console.log("Excelente");

    } else {
        console.log("Nota Inválida!");
    }
}
classificacao(2);
classificacao(5);
classificacao(8);
classificacao(9.5);
classificacao(11);