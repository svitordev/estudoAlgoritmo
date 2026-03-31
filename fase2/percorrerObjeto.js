function percorrerObjeto(obj) {
  for (const chave in obj) {
    console.log(`${chave}: ${obj[chave]}`);
  }
}
percorrerObjeto({
  nome: "Leite",
  marca: "Camponesa",
  preco: 4.3,
  estoque: 134,
});
