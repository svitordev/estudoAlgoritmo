function descontoTipoDeCliente(valor, cliente){
    if(cliente.toLowerCase() === "vip"){
        const desconto = valor * 0.15;
        const valorFinal = valor - desconto;
        console.log(`Valor final: R$${valorFinal}`)
    } else{
        console.log(`Valor final: R$${valor}`)
    }
}
descontoTipoDeCliente(100, "vip");
descontoTipoDeCliente(100, "Vip");
descontoTipoDeCliente(100, "VIP");
descontoTipoDeCliente(100, "comum");
