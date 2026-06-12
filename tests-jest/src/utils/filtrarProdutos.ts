export interface Produto {
  nome: string;
  preco: number;
}

export function filtrarProdutos(lista: Array<Produto>, busca: string, precoMaximo: number) {
  if(precoMaximo <= 0) throw new Error("Preço máximo inválido!")
  const produtosFiltrados: Array<Produto> = [];
  
  for(const produto of lista){
    if(produto.nome.toLowerCase().includes(busca.toLowerCase()) && produto.preco <= precoMaximo){
        produtosFiltrados.push(produto);
    }
  }
  // 4. Retorne a nova lista
  return produtosFiltrados;
}