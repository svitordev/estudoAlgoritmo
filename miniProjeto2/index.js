const produtos = [
  {
    id: 1,
    nome: "Arroz Integral",
    categoria: "Alimento",
    preco: 8.5,
    estoque: 40,
    marca: "Tio João",
    ativo: true,
  },
  {
    id: 2,
    nome: "Feijão Preto",
    categoria: "Alimento",
    preco: 7.2,
    estoque: 25,
    marca: "Kicaldo",
    ativo: true,
  },
  {
    id: 3,
    nome: "Macarrão Espaguete",
    categoria: "Alimento",
    preco: 4.75,
    estoque: 60,
    marca: "Fortaleza",
    ativo: true,
  },
  {
    id: 4,
    nome: "Leite Integral",
    categoria: "Bebida",
    preco: 5.3,
    estoque: 18,
    marca: "Betânia",
    ativo: true,
  },
  {
    id: 5,
    nome: "Café Torrado",
    categoria: "Bebida",
    preco: 14.9,
    estoque: 12,
    marca: "Santa Clara",
    ativo: true,
  },
  {
    id: 6,
    nome: "Refrigerante Cola",
    categoria: "Bebida",
    preco: 9.99,
    estoque: 30,
    marca: "Coca-Cola",
    ativo: false,
  },
  {
    id: 7,
    nome: "Mouse Gamer",
    categoria: "Eletrônico",
    preco: 89.9,
    estoque: 8,
    marca: "Logitech",
    ativo: true,
  },
  {
    id: 8,
    nome: "Teclado Mecânico",
    categoria: "Eletrônico",
    preco: 199.9,
    estoque: 5,
    marca: "Redragon",
    ativo: true,
  },
  {
    id: 9,
    nome: 'Monitor 24"',
    categoria: "Eletrônico",
    preco: 899.9,
    estoque: 3,
    marca: "AOC",
    ativo: true,
  },
  {
    id: 10,
    nome: "Caderno Universitário",
    categoria: "Papelaria",
    preco: 18.5,
    estoque: 22,
    marca: "Tilibra",
    ativo: true,
  },
];

function listarProdutos(produtos) {
  for (const prod of produtos) {
    if (prod.ativo) {
      console.log(`nome: ${prod.nome}`);
      console.log(`marca: ${prod.marca}`);
      console.log(`categoria: ${prod.categoria}`);
      console.log(`quant: ${prod.estoque}`);
      console.log(`preço: ${prod.preco}`);
      console.log(`--------------------------`);
    }
  }
}
// listarProdutos(produtos);

function buscarPorNome(buscaNome, produtos) {
  let busca = [];
  for (const prod of produtos) {
    if (
      prod.nome.toLowerCase().includes(buscaNome.toLowerCase()) &&
      prod.ativo
    ) {
      busca.push(prod);
    }
  }
  return busca;
}
//  console.log(buscarPorNome("arroz", produtos));
// console.log(buscarPorNome("gamer", produtos));
// console.log(buscarPorNome("Refrigerante", produtos));

function contarTotal(produtos) {
  let count = 0;
  for (let i = 0; i < produtos.length; i++) {
    count++;
  }
  return count;
}
// const total = contarTotal(produtos)
// console.log(`tem ${total} produtos nesse mercado!`)

function filtrarCategoria(categoria, produtos) {
  let busca = [];
  for (const prod of produtos) {
    if (
      prod.categoria.toLowerCase() === categoria.toLowerCase() &&
      prod.ativo
    ) {
      busca.push(prod);
    }
  }
  return busca;
}
//  console.log("--------Alimentos------------")
//  console.log(filtrarCategoria("alimento", produtos))
// console.log("--------Bebidas------------")
// filtrarCategoria("Bebida", produtos)
// console.log("--------Eletrônicos------------")
// filtrarCategoria("Eletrônico", produtos)
// console.log("--------Papelaria------------")
// filtrarCategoria("Papelaria", produtos)

function mostrarMaisCaro(produtos) {
  let maisCaro = produtos[0];
  for (const prod of produtos) {
    if (prod.preco > maisCaro.preco) {
      maisCaro = prod;
    }
  }
  return maisCaro;
}
// console.log(mostrarMaisCaro(produtos));

function buscaPorId(id) {
  for (const prod of produtos) {
    if (prod.id === id) {
      return prod;
    }
  }
  return null;
}
// console.log(buscaPorId(6))

function mostrarBaixoEstoque(limite) {
  let produtosBaixoEstoque = [];
  for (const prod of produtos) {
    if (prod.estoque < limite) {
      produtosBaixoEstoque.push(prod);
    }
  }
  return produtosBaixoEstoque;
}
// console.log(mostrarBaixoEstoque(10))

function somarValorTotalEstoque() {
  let total = 0;
  for (const prod of produtos) {
    total += prod.preco * prod.estoque;
  }
  return total;
}
// console.log(somarValorTotalEstoque())

function produtosInativos() {
  let inativos = [];
  for (const prod of produtos) {
    if (!prod.ativo) {
      inativos.push(prod);
    }
  }
  return inativos;
}
// console.log(produtosInativos())

function removerPorId(id) {
 return produtos.filter((produto) => produto.id !== id);
}
// console.log(removerPorId(5))

function atualizarPreco(id, novoPreco){
  
}