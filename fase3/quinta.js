//usuarios
{
  const usuarios = [
    { id: 1, nome: "Ana", ativo: true, cargo: "cliente" },
    { id: 2, nome: "Carlos", ativo: false, cargo: "admin" },
    { id: 3, nome: "Bruna", ativo: true, cargo: "cliente" },
    { id: 4, nome: "Marcos", ativo: true, cargo: "suporte" },
    { id: 5, nome: "Julia", ativo: false, cargo: "cliente" },
  ];
  function filtrarUsersAtivos(usuarios) {
    return usuarios.filter((user) => user.ativo);
  }
  const usersAtivos = filtrarUsersAtivos(usuarios);
  // console.log(usersAtivos);
  function apenasNomesDosUsersAtivos(usersAtivos) {
    return usersAtivos.map((user) => user.nome);
  }
  const nomesDosUsersAtivos = apenasNomesDosUsersAtivos(
    filtrarUsersAtivos(usuarios),
  );
  // console.log(nomesDosUsersAtivos);

  function peloMenosUmAdmin(usuarios) {
    return usuarios.some((user) => user.cargo === "admin");
  }
  // console.log(peloMenosUmAdmin(usuarios));

  function todosUsuariosAtivos(usuarios) {
    return usuarios.every((user) => user.ativo);
  }
  // console.log(todosUsuariosAtivos(usuarios));
}
//vendas
{
  const vendas = [
    { id: 1, cliente: "Ana", total: 120 },
    { id: 2, cliente: "Carlos", total: 300 },
    { id: 3, cliente: "Bruna", total: 80 },
    { id: 4, cliente: "Marcos", total: 150 },
  ];

  function somarTotalDasVendas(vendas) {
    return vendas.reduce((acc, cur) => acc + cur.total, 0);
  }
  const totalDasVendas = somarTotalDasVendas(vendas);
  // console.log(totalDasVendas);
  function criarTextVendas(vendas) {
    return vendas.map(
      (venda) => `Cliente: ${venda.cliente} - Total: R$ ${venda.total}`,
    );
  }
  const textVendas = criarTextVendas(vendas);
  // console.log(textVendas);
  function buscaPorIdVenda(vendas, id) {
    return vendas.find((venda) => venda.id === id);
  }
  const venda3 = buscaPorIdVenda(vendas, 3);
  // console.log(venda3);
}
//produtos
{
  const produtos = [
    { id: 1, nome: "Mouse", categoria: "Eletrônicos", preco: 80, estoque: 10 },
    {
      id: 2,
      nome: "Teclado",
      categoria: "Eletrônicos",
      preco: 150,
      estoque: 0,
    },
    { id: 3, nome: "Caderno", categoria: "Papelaria", preco: 20, estoque: 15 },
    { id: 4, nome: "Caneta", categoria: "Papelaria", preco: 5, estoque: 50 },
    {
      id: 5,
      nome: "Monitor",
      categoria: "Eletrônicos",
      preco: 900,
      estoque: 3,
    },
  ];

  function filtroPorCategoriaProdutos(produtos, categoria) {
    return produtos.filter(
      (prod) => prod.categoria.toLowerCase() === categoria.toLowerCase(),
    );
  }
  const produtosEletronicos = filtroPorCategoriaProdutos(
    produtos,
    "Eletrônicos",
  );
  // console.log(produtosEletronicos);

  function filtrarProdutosComEstoque(produtos) {
    return produtos.filter((prod) => prod.estoque > 0);
  }
  const produtosComEstoque = filtrarProdutosComEstoque(produtos);
  // console.log(produtosComEstoque);

  function NomesDosProdutos(produtos) {
    return produtos.map((prod) => prod.nome);
  }
  const produtosNomes = NomesDosProdutos(produtos);
  // console.log(produtosNomes);

  function buscaPorIdProduto(produtos, id) {
    return produtos.find((prod) => prod.id === id);
  }
  const produtos4 = buscaPorIdProduto(produtos, 4);
  // console.log(produtos4);
}
//Clientes
{
  const clientes = [
    { id: 1, nome: "ana souza", cidade: "Recife" },
    { id: 2, nome: "carlos lima", cidade: "Surubim" },
    { id: 3, nome: "bruna silva", cidade: "Caruaru" },
  ];

  function formatarApresentacaoDeClientes(clientes) {
    return clientes.map((cliente) => {
      const nomeCorreto = cliente.nome
        .split(" ")
        .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(" ");
      return `${nomeCorreto} - ${cliente.cidade}`;
    });
  }
  const apresentacaoClientes = formatarApresentacaoDeClientes(clientes);
  // console.log(apresentacaoClientes);
}
//atualizar objeto sem alterar o original
{
  const usuario = {
    id: 1,
    nome: "Ana",
    idade: 22,
    cidade: "Recife",
    ativo: true,
  };
  const usuarioAtualizado = { ...usuario, idade: 23, cidade: "Surubim" };
  const { nome, cidade } = usuarioAtualizado;
  // console.log(nome, cidade)
}
//Dashboard simples com dados mockados
{
  const dashboard = {
    usuarios: [
      { id: 1, nome: "Ana", ativo: true },
      { id: 2, nome: "Carlos", ativo: false },
      { id: 3, nome: "Bruna", ativo: true },
    ],
    vendas: [
      { id: 1, total: 100 },
      { id: 2, total: 250 },
      { id: 3, total: 80 },
    ],
    produtos: [
      { id: 1, nome: "Mouse", categoria: "Eletrônicos" },
      { id: 2, nome: "Caderno", categoria: "Papelaria" },
      { id: 3, nome: "Monitor", categoria: "Eletrônicos" },
    ],
  };
  function listaUserAtivos(users) {
    return users.filter((user) => user.ativo);
  }
  const usersAtivos = listaUserAtivos(dashboard.usuarios);
  // console.log(usersAtivos);

  function somarTotalDasVendasDashboard(vendas) {
    return vendas.reduce((acc, cur) => acc + cur.total, 0);
  }
  const totalVendas = somarTotalDasVendasDashboard(dashboard.vendas);
  // console.log(totalVendas);

  function filtroPorCategoriaProdutosDash(produtos, categoria) {
    return produtos.filter(
      (prod) => prod.categoria.toLowerCase() === categoria.toLowerCase(),
    );
  }
  const produtosEletronicosDash = filtroPorCategoriaProdutosDash(
    dashboard.produtos,
    "eletrônicos",
  );
  const produtosPapelariaDash = filtroPorCategoriaProdutosDash(
    dashboard.produtos,
    "papelaria",
  );
  /* console.log("Eletrônicos")
console.log(produtosEletronicosDash)
console.log("Papelaria")
console.log(produtosPapelariaDash) */

  function nomesDosProdutosDash(produtos) {
    return produtos.map((prod) => prod.nome);
  }
  const produtosNomesArray = nomesDosProdutosDash(dashboard.produtos);
  // console.log(produtosNomesArray);

  function resumoDashboard(dashboard) {
    return {
      totalUsuarios: dashboard.usuarios.length,
      usuariosAtivos: dashboard.usuarios.filter((user) => user.ativo).length,
      totalVendas: dashboard.vendas.reduce((acc, cur) => acc + cur.total, 0),
      totalProdutos: dashboard.produtos.length,
    };
  }
  console.log(resumoDashboard(dashboard));
}
