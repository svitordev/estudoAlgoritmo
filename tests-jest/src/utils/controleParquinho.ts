export interface Pessoa {
  nome: string
  idade: number
  altura: number
}

export function controleParquinho(lista: Array<Pessoa>) {
  let liberados = 0
  let barrados = 0

  if (lista.length === 0) throw new Error('lista vazia')

  for (const { idade, altura } of lista) {
    if (idade < 0) throw new Error('Idade menor que 0 não é permitido!');
    
    if (idade >= 12 && altura >= 140) {
      liberados++
    } else {
      barrados++
    }
  }

  return `${liberados} pessoas foram liberadas, mas ${barrados} pessoas não tinha altura e idade mínima para entrar no parque.`
}
