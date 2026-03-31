function dobrarValoresMap(array) {
  const arrayDobrado = array.map((n) => n * 2);
  return arrayDobrado;
}
// console.log(dobrarValoresMap([2,4,6,8,10]))
function pegarNomesMap(users) {
  const nomesUsers = users.map((user) => user.nome);
  return nomesUsers;
}
/*console.log(
  pegarNomesMap([
    { id: 1, nome: "Ana", idade: 22 },
    { id: 2, nome: "Carlos", idade: 30 },
    { id: 3, nome: "Beatriz", idade: 27 },
  ]),
);*/
function filtrarUsersAtivos(users) {
  const usersAtivos = users.filter((user) => user.ativo === true);
  return usersAtivos;
}
/* console.log(filtrarUsersAtivos([
   { id: 1, nome: "Ana", ativo: true },
   { id: 2, nome: "Carlos", ativo: false },
  { id: 3, nome: "Beatriz", ativo: true },
   { id: 4, nome: "João", ativo: false }
 ]))*/
function filtrarProdutosPapelaria( categoria, produtos) {
  const produtosPapelaria = produtos.filter(
    (prod) => prod.categoria.toLowerCase() === categoria.toLowerCase(),
  );
  return produtosPapelaria;
}
/* console.log(filtrarProdutosPapelaria("Papelaria",[
  { id: 1, nome: "Mouse", categoria: "Eletrônicos" },
  { id: 2, nome: "Teclado", categoria: "Eletrônicos" },
  { id: 3, nome: "Caderno", categoria: "Papelaria" },
  { id: 4, nome: "Caneta", categoria: "Papelaria" }
])) */

function encontrarProdutoId(id, produtos){
    const produtoEncontrado = produtos.find((prod)=> prod.id === id);
    return produtoEncontrado;
}
/* console.log(encontrarProdutoId(2, [
  { id: 1, nome: "Mouse", preco: 80 },
  { id: 2, nome: "Teclado", preco: 120 },
  { id: 3, nome: "Monitor", preco: 900 }
])) */

function somarVendasReduce(valores){
    const total = valores.reduce((acc, cur) => acc + cur, 0);
    return total;
}
// console.log(somarVendasReduce([150, 200, 300, 100, 50]));

function verificarPeloMenosUmAdmin(users){
    return users.some((user) => user.admin === true)
}
const existeAdmin = verificarPeloMenosUmAdmin([
  { id: 1, nome: "Ana", admin: false },
  { id: 2, nome: "Carlos", admin: false },
  { id: 3, nome: "Beatriz", admin: true }
])
// console.log(existeAdmin);

function verificarTodosAtivos(users){
    return users.every((user)=> user.ativo === true)
}
const todosAtivos = verificarTodosAtivos([
  { id: 1, nome: "Ana", ativo: true },
  { id: 2, nome: "Carlos", ativo: true },
  { id: 3, nome: "Beatriz", ativo: true }
])
// console.log(todosAtivos);
const produto = {
  id: 1,
  nome: "Notebook",
  preco: 3500,
  categoria: "Eletrônicos"
};
const { nome, preco} = produto;
// console.log(nome, preco);

const usuario = {
  id: 1,
  nome: "Ana",
  idade: 22,
  cidade: "Recife"
};
const usuarioAtualizado = {...usuario, idade: 23, cidade: "Surubim" };
// console.log(usuarioAtualizado);