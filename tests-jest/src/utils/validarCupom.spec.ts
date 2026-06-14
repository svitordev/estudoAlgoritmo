import { validarCupom } from './validarCupom'

describe('validarCupom.ts', () => {
  const mockCupons = [
    { codigo: 'VALE10', descontoPorcentagem: 10, valorMinimo: 50 },
    { codigo: 'SUPER50', descontoPorcentagem: 50, valorMinimo: 500 },
  ]

  describe('caminho feliz', () => {
    test('enviar dados corretor e retornar o valor com desconto', () => {
      expect(validarCupom(50, 'vale10', mockCupons)).toBe(45)
    })
    test('enviar dados corretor e retornar o valor com desconto no limite', () => {
      expect(validarCupom(500, 'super50', mockCupons)).toBe(250)
    })
  })
  describe('caminho triste', () => {
    test('retornar que o valor mínimo não foi atingido', () => {
      expect(validarCupom(100, 'super50', mockCupons)).toBe(
        'O valor mínimo para usar este cupom não foi atingindo',
      )
    })
    test('retornar que o cupom não foi encontrado', () => {
      expect(validarCupom(100, 'cuPomErrado', mockCupons)).toBe(
        'Cupom inexistente',
      )
    })
  })
  describe('regras de negócios', () => {
    test('se o valor no carrinho for menor que zero, retornar erro', () => {
      expect(() => validarCupom(-10, 'vale10', mockCupons)).toThrow(
        'Valor do carrinho inválido!',
      )
    })
    test('se o valor no carrinho for igual a zero, retornar erro', () => {
      expect(() => validarCupom(0, 'vale10', mockCupons)).toThrow(
        'Valor do carrinho inválido!',
      )
    })
    test('deve retornar cupom inexistente se a lista de cupons da loja estiver vazia', () => {
      expect(validarCupom(100, 'vale10', [])).toBe('Cupom inexistente')
    })
  })
})
