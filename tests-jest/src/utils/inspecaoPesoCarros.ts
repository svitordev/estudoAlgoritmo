export function inspecaoPesoCarros(list: Array<number>) {
  let countDefeitos = 0
  let maiorPeso = 0

  if (list.length === 0) return `Não existem carrinhos para serem inspecionados`
  for (const peso of list) {
    if (typeof peso !== 'number')
      throw new Error('Todos os items precisam ser números')
  }

  for (const peso of list) {
    if (peso > 10) {
      countDefeitos++
      if (peso > maiorPeso) {
        maiorPeso = peso
      }
    }
  }
  return `Existem ${countDefeitos} acima do peso e o mais pesado é: ${maiorPeso}.`
}
console.log(inspecaoPesoCarros([10, 12, 10, 15, 10]))
