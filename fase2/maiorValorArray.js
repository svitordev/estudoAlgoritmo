function maiorValor(numeros){
    let maior = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] > maior) maior = numeros[i];       
    }
    return maior;
}
console.log(maiorValor([4,1,7,0,9]))