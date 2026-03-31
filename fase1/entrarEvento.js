function entrarEvento(idade, convite){
 if(convite && idade >= 18){
    console.log("Entrada permitida!")
 }else {
    console.log("Entrada negada!")
 }
}
entrarEvento(18, true);
entrarEvento(20, true);
entrarEvento(20, false);
entrarEvento(17, true);