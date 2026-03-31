function media(nota1,nota2){
    const media = (nota1 + nota2) / 2;
    console.log(`Média: ${media}`);
    if(media === 7){
     console.log("A média é ígual a 7!")
    } else if(media > 7){
        console.log("A média é maior que 7!")
    } else {
        console.log("A média é menor que 7!")
    }
}
media(5,8);
media(7,7);
media(9,8);