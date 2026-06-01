const dashboard = {
  usuarios: [
    { id: 1, nome: "Ana", ativo: true, cargo: "cliente", cidade: "Recife" },
    { id: 2, nome: "Carlos", ativo: false, cargo: "admin", cidade: "Surubim" },
    { id: 3, nome: "Bruna", ativo: true, cargo: "cliente", cidade: "Caruaru" },
    { id: 4, nome: "Marcos", ativo: true, cargo: "suporte", cidade: "Recife" },
  ],

  vendas: [
    { id: 1, cliente: "Ana", total: 120, status: "pago" },
    { id: 2, cliente: "Carlos", total: 300, status: "pendente" },
    { id: 3, cliente: "Bruna", total: 80, status: "pago" },
    { id: 4, cliente: "Marcos", total: 150, status: "pago" },
  ],

  produtos: [
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
  ],
};
//USUÁRIOS
function usuariosAtivos(usuarios) {
  return usuarios.filter((user) => user.ativo);
}
// console.log(usuariosAtivos(dashboard.usuarios))

function nomesUsuarios(usuarios) {
  return usuarios.map((user) => user.nome);
}
// console.log(nomesUsuarios(dashboard.usuarios))

function existeAlgumAdmin(usuarios) {
  return usuarios.some((user) => user.cargo === "admin");
}
// console.log(existeAlgumAdmin(dashboard.usuarios))

function todosUsuariosAtivos(usuarios) {
  return usuarios.every((user) => user.ativo);
}
// console.log(todosUsuariosAtivos(dashboard.usuarios))

function encontrarUserPorNome(usuarios, nome) {
  return usuarios.find(
    (user) => user.nome.toLowerCase() === nome.toLowerCase(),
  );
}
// console.log(encontrarUserPorNome(dashboard.usuarios, "carlos"))

//VENDAS
function somarTotalDasVendas(vendas) {
  return vendas.reduce((acc, cur) => acc + cur.total, 0);
}
// console.log(somarTotalDasVendas(dashboard.vendas));

function somarTotalDasVendasPagas(vendas) {
  return vendas
    .filter((venda) => venda.status === "pago")
    .reduce((acc, cur) => acc + cur.total, 0);
}
// console.log(somarTotalDasVendasPagas(dashboard.vendas));

function criarTextoSobreVendas(vendas) {
  return vendas.map(
    (venda) =>
      `Cliente: ${venda.cliente} | Total: R$ ${venda.total} | Status: ${venda.status}`,
  );
}
// console.log(criarTextoSobreVendas(dashboard.vendas))

function encontrarVendaPorId(vendas, id) {
  return vendas.find((venda) => venda.id === id);
}
const venda3 = encontrarVendaPorId(dashboard.vendas, 3);
// console.log(encontrarUserPorNome(dashboard.usuarios, venda3.cliente));

function existeVendaPendente(vendas) {
  return vendas.some((venda) => venda.status === "pendente");
}
// console.log(existeVendaPendente(dashboard.vendas));

//PRODUTOS
function filtrarProdutosPorCategoria(produtos, categoria) {
  return produtos.filter(
    (prod) => prod.categoria.toLowerCase() === categoria.toLowerCase(),
  );
}
// console.log(filtrarProdutosPorCategoria(dashboard.produtos, "papelaria"))

function filtrarProdutosComEstoque(produtos) {
  return produtos.filter((prod) => prod.estoque > 0);
}
// console.log(filtrarProdutosComEstoque(dashboard.produtos))

function nomesDosProdutos(produtos) {
  return produtos.map((prod) => prod.nome);
}
// console.log(nomesDosProdutos(dashboard.produtos));

function encontrarProdutoPorId(produtos, id) {
  return produtos.find((prod) => prod.id === id);
}
// console.log(encontrarProdutoPorId(dashboard.produtos, 3));

function todosProdutosComEstoque(produtos) {
  return produtos.every((prod) => prod.estoque > 0);
}
// console.log(todosProdutosComEstoque(dashboard.produtos))

//ATUALIZAÇÃO E EXTRAÇÃO
const usuario4 = dashboard.usuarios[3];
const usuario4Atualizado = { ...usuario4, ativo: false, cidade: "João Pessoa" };
const { nome, cidade } = usuario4Atualizado;
// console.log(nome, cidade);

//RESUMO FINAL DO DASHBOARD
function gerarResumoDashboard(dashboard) {
  return {
    totalUsuarios: dashboard.usuarios.length,
    usuariosAtivos: dashboard.usuarios.filter((user) => user.ativo).length,
    existeAdmin: dashboard.usuarios.some((user) => user.cargo === "admin"),
    totalVendas: dashboard.vendas.reduce((acc, cur) => acc + cur.total, 0),
    totalVendasPagas: dashboard.vendas
      .filter((venda) => venda.status === "pago")
      .reduce((acc, cur) => acc + cur.total, 0),
    totalProdutos: dashboard.produtos.length,
    produtosEmEstoque: dashboard.produtos.filter((prod) => prod.estoque > 0)
      .length,
  };
}
// console.log(gerarResumoDashboard(dashboard));

//EXTRAS

function nomesUsuariosAtivosMaiusculo(usuarios){
    return usuarios.filter((user)=> user.ativo).map((user)=> user.nome.toUpperCase())
}
console.log(nomesUsuariosAtivosMaiusculo(dashboard.usuarios))

function valorTotalDeEstoqueProdutos(produtos){
    return produtos.reduce((acc, cur) => acc + (cur.preco * cur.estoque), 0)
}
// console.log(valorTotalDeEstoqueProdutos(dashboard.produtos))