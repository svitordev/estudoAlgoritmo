function somarArray(numeros){
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
        
    }
    return soma;
}
console.log(somarArray([1,5,4]));
console.log(somarArray([10,50,40]));