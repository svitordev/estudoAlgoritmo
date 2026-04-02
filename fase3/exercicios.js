function dobrarNums(numeros) {
  return numeros.map((num) => num * 2);
}
const numerosDobrados = dobrarNums([3, 5, 7, 9]);
// console.log(numerosDobrados)
function pegarNomes(pessoas) {
  return pessoas.map((pessoa) => pessoa.nome);
}
const nomes = pegarNomes([
  { id: 1, nome: "Marina" },
  { id: 2, nome: "Lucas" },
  { id: 3, nome: "Fernanda" },
]);
// console.log(nomes)
function formatarFrases(produtos) {
  return produtos.map((produto) => `${produto.nome} custa R$ ${produto.preco}`);
}
const frasesFormatadasDeProdutos = formatarFrases([
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 },
]);
// console.log(frasesFormatadasDeProdutos);
function addTextAoNome(usuarios) {
  return usuarios.map((user) => `Usuário: ${user.nome}`);
}
const nomesFormatados = addTextAoNome([
  { nome: "Ana" },
  { nome: "Carlos" },
  { nome: "Bruna" },
]);
// console.log(nomesFormatados);
function filtrarMaioresDeIdade(pessoas) {
  return pessoas.filter((pessoa) => pessoa.idade >= 18);
}
const maioresDeIdade = filtrarMaioresDeIdade([
  { nome: "João", idade: 17 },
  { nome: "Amanda", idade: 21 },
  { nome: "Rafael", idade: 15 },
  { nome: "Bianca", idade: 30 },
]);
// console.log(maioresDeIdade);
function filtrarNumerosPares(numeros) {
  return numeros.filter((num) => num % 2 === 0);
}
const numerosPares = filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(numerosPares);

function filtrarProdutosComEstoque(produtos) {
  return produtos.filter((prod) => prod.estoque > 0);
}
const produtosComEstoque = filtrarProdutosComEstoque([
  { nome: "Caderno", estoque: 10 },
  { nome: "Caneta", estoque: 0 },
  { nome: "Borracha", estoque: 4 },
  { nome: "Lápis", estoque: 0 },
]);
// console.log(produtosComEstoque);

function filtrarProdutosPorCategoria(produtos, categoria) {
  return produtos.filter(
    (prod) => prod.categoria.toLowerCase() === categoria.toLowerCase(),
  );
}
const produtosEletronicos = filtrarProdutosPorCategoria(
  [
    { nome: "Mouse", categoria: "Eletrônicos" },
    { nome: "Caderno", categoria: "Papelaria" },
    { nome: "Monitor", categoria: "Eletrônicos" },
    { nome: "Caneta", categoria: "Papelaria" },
  ],
  "Eletrônicos",
);
// console.log(produtosEletronicos);

function somaTotalReduce(nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}
const somaTotal = somaTotalReduce([10, 20, 30, 40]);
// console.log(somaTotal);

function somaTotalDosPrecos(carrinho) {
  return carrinho.reduce((acc, cur) => acc + cur.preco, 0);
}
const valorTotalDaCompra = somaTotalDosPrecos([
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 120 },
  { nome: "Tênis", preco: 200 },
]);
// console.log(valorTotalDaCompra);

function reduceUsersAtivos(usuarios) {
  return usuarios.reduce((acc, cur) => {
    //verificar se está ativo primeiro, para adicionar 1, melhor do que "acc + cur.ativo"
    return cur.ativo ? acc + 1 : acc;
  }, 0);
}
const totalUsersAtivos = reduceUsersAtivos([
  { nome: "Ana", ativo: true },
  { nome: "Carlos", ativo: false },
  { nome: "Beatriz", ativo: true },
  { nome: "João", ativo: true },
]);
// console.log(totalUsersAtivos);

function findEncontrarPorID(produtos, id) {
  return produtos.find((prod) => prod.id === id);
}
const produtoEncontrado = findEncontrarPorID(
  [
    { id: 1, nome: "Mouse" },
    { id: 2, nome: "Teclado" },
    { id: 3, nome: "Monitor" },
  ],
  3,
);
// console.log(produtoEncontrado);

function findEncontrarUserPorNome(usuarios, nome) {
  return usuarios.find(
    (user) => user.nome.toLowerCase() === nome.toLowerCase(),
  );
}
const usuarioEncontrado = findEncontrarUserPorNome(
  [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Carlos" },
    { id: 3, nome: "Bruna" },
  ],
  "Carlos",
);
// console.log(usuarioEncontrado);
const filme = {
  titulo: "Interestelar",
  diretor: "Christopher Nolan",
  ano: 2014,
};
const { titulo, ano } = filme;
// console.log(`Filme: ${titulo} foi lançado em: ${ano}`);

const produtoEx = {
  id: 1,
  nome: "Notebook",
  preco: 3000,
  estoque: 5,
};

const produtoAtualizado = { ...produtoEx, preco: 2800, estoque: 8 };
// console.log(produtoAtualizado);

function nomesUpperCaseComMap(nomes) {
  return nomes.map((nome) => nome.toUpperCase());
}
const nomesEmMaiusculos = nomesUpperCaseComMap(["ana", "carlos", "beatriz"]);
// console.log(nomesEmMaiusculos);

function filtrarVendasMaioresQue150(vendas) {
  return vendas.filter((venda) => venda > 150);
}
const vendasMaioresQue150 = filtrarVendasMaioresQue150([
  100, 250, 80, 320, 150,
]);
// console.log(vendasMaioresQue150);

function somaTotalPedidos(pedidos) {
  return pedidos.reduce((acc, cur) => acc + cur.total, 0);
}
const totalPedidos = somaTotalPedidos([
  { id: 1, total: 100 },
  { id: 2, total: 250 },
  { id: 3, total: 300 },
]);
// console.log(totalPedidos);
