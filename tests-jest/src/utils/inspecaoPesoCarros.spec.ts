import { inspecaoPesoCarros } from './inspecaoPesoCarros'

describe('inspecaoPesoCarros.ts', () => {
  const mockArray = [10, 12, 10, 15, 10]
  test('Verificar se realmente retorna a quantidade e o maior peso', () => {
    expect(inspecaoPesoCarros(mockArray)).toBe(
      'Existem 2 acima do peso e o mais pesado é: 15.',
    )
  })
  test('verificando se a lista está vazia', () => {
    expect(inspecaoPesoCarros([])).toBe(
      'Não existem carrinhos para serem inspecionados',
    )
  })
  test('rejeitando se algum item não é number', () => {
    expect(() => inspecaoPesoCarros([10, 12, 'Bananinha', 15, 10])).toThrow()
  })
})
