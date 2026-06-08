import { controleParquinho } from './controleParquinho'

describe('controleParquinho.ts', () => {
  const amigos = [
    { nome: 'Pedro', idade: 14, altura: 150 }, // ✅
    { nome: 'Lucas', idade: 10, altura: 145 }, // ❌
    { nome: 'Maria', idade: 13, altura: 135 }, // ❌
    { nome: 'Ana', idade: 12, altura: 140 }, // ✅
  ]
  const amigosIdadeNegativa = [
    { nome: 'Pedro', idade: -14, altura: 150 }, // ✅
    { nome: 'Lucas', idade: 10, altura: 145 }, // ❌
  ]

  test('verificar se está add aos contadores, se as verificações são atendidas', () => {
    expect(controleParquinho(amigos)).toBe(
      '2 pessoas foram liberadas, mas 2 pessoas não tinha altura e idade mínima para entrar no parque.',
    )
  })

  describe('verificar caminho triste', () => {
    test('verificar se está cancelando se a lista estiver vazia', () => {
      expect(() => controleParquinho([])).toThrow('lista vazia')
    })
    test('verificar se alguma idade for negativa, se retorna erro', () => {
      expect(() => controleParquinho(amigosIdadeNegativa)).toThrow(
        'Idade menor que 0 não é permitido!',
      )
    })
  })
})
