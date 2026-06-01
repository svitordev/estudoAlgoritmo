const pedidosDisponiveis = [
  { id: 1, tipo: "Eletrônico", peso: 6.0, volume: 15, taxa: 35.0 }, // Pesado e alta taxa
  {
    id: 2,
    tipo: "Bebida em garrafa de vidro",
    peso: 1.5,
    volume: 5,
    taxa: 40.0,
  }, // Vidro e alta taxa (Conflito!)
  { id: 3, tipo: "Hambúrguer", peso: 0.8, volume: 4, taxa: 20.0 }, // Leve e taxa média
  { id: 4, tipo: "Pizza", peso: 1.2, volume: 12, taxa: 25.0 }, // Volume grande, peso médio
  {
    id: 5,
    tipo: "Bebida em garrafa de vidro",
    peso: 2.0,
    volume: 6,
    taxa: 15.0,
  }, // Vidro e taxa baixa
  { id: 6, tipo: "Livros", peso: 5.5, volume: 8, taxa: 30.0 }, // Pesado
  { id: 7, tipo: "Acessórios", peso: 0.2, volume: 2, taxa: 18.0 }, // Muito leve e pequeno
];

function OrganizarEntrega(pedidos) {
  let pedidosEmOrdem = [...pedidos].sort((a, b) => b.taxa - a.taxa);

  const limitePeso = 15;
  const limiteVolume = 50;
  let pesoAtual = 0;
  let volumeAtual = 0;
  let mochila = [];

  const temProdutoMuitoPesado = pedidosEmOrdem.some(
    (pedido) => pedido.peso > 5,
  );

  let pedidos_seguros = [];
  for (const pedido of pedidosEmOrdem) {
    if (temProdutoMuitoPesado && pedido.tipo === "Bebida em garrafa de vidro") {
      continue;
    }
    pedidos_seguros.push(pedido);
  }

  for (const pedido of pedidos_seguros) {
    if (
      pesoAtual + pedido.peso <= limitePeso &&
      volumeAtual + pedido.volume <= limiteVolume
    ) {
      mochila.push(pedido);
      pesoAtual += pedido.peso;
      volumeAtual += pedido.volume;
    }
  }
  return mochila;
}

const entrega = OrganizarEntrega(pedidosDisponiveis);
console.log(entrega);
