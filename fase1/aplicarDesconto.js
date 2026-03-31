function aplicarDesconto(valor, porcentagem){
    const porcento = porcentagem / 100;
    const desconto = valor * porcento
    const valorFinal = valor - desconto;

    return valorFinal;
}

console.log(aplicarDesconto(200, 20));
console.log(aplicarDesconto(100, 50));
console.log(aplicarDesconto(1000, 80));
console.log(aplicarDesconto(100, 90));