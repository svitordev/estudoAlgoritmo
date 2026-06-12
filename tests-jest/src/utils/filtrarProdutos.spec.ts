import { filtrarProdutos } from './filtrarProdutos'

describe('filtrarProdutos.ts', () => {
  const vitrine = [
    { nome: 'Camiseta Azul', preco: 50 },
    { nome: 'Camiseta Vermelha', preco: 60 },
    { nome: 'Calça Jeans', preco: 120 },
    { nome: 'Meia Branca', preco: 15 },
  ]

  test('testar busca para retornar Camiseta Azul', () => {
    expect(filtrarProdutos(vitrine, 'camis', 55)).toEqual([
      { nome: 'Camiseta Azul', preco: 50 },
    ])
  })
  test('Testar o erro de preço máximo igual a 0', () => {
    expect(() => filtrarProdutos(vitrine, 'camis', 0)).toThrow(
      'Preço máximo inválido!',
    )
  })
  test('retornar array vazio se digita algo que não tem na lista', () => {
    expect(filtrarProdutos(vitrine, 'fone', 10)).toEqual([])
  })
})
