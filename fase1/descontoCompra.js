function processarDesconto(valor){
    const desconto = valor * 0.1;
    const valorComDesconto = valor - desconto;
    if(valor > 100){
        return `Valor final: R$ ${valorComDesconto}`;
    } else {
        return `Valor final: R$ ${valor}`;
    }
}
console.log(processarDesconto(100));
console.log(processarDesconto(300));
console.log(processarDesconto(1000));
console.log(processarDesconto(30));