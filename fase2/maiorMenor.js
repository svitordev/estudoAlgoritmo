function maiorMenor(a,b){
    if(a > b){
        console.log(`O primeiro número: ${a} é maior que o segundo: ${b}`)
    }else if(b > a){
        console.log(`O segundo número: ${b} é maior que o primeiro: ${a}`)
    } else {
        console.log(`O primeiro número: ${a} e o segundo: ${b} são íguais!`)
    }
}
maiorMenor(-2,3);
maiorMenor(3,-8);
maiorMenor(5,5);