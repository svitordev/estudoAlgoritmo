function criarProduto(nome, preco, estoque){
    return {
        nome,
        preco,
        estoque
    }
    
}
let leite = criarProduto("Leite", 4.50, 134)
console.log(leite);

leite.preco = 4.30;
leite.estoque = 130;
console.log(leite);
