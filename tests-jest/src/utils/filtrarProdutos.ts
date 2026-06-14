export interface Produto {
  nome: string
  preco: number
}

export function filtrarProdutos(
  lista: Array<Produto>,
  busca: string,
  precoMaximo: number,
) {
  if (precoMaximo <= 0) throw new Error('Preço máximo inválido!')

  return lista.filter((produto) => {
    const nomeBate = produto.nome.toLowerCase().includes(busca.toLowerCase())
    const precoBate = produto.preco <= precoMaximo

    return nomeBate && precoBate;
  })
}
