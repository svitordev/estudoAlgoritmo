interface Cupom {
  codigo: string
  descontoPorcentagem: number
  valorMinimo: number
}

export function validarCupom(
  valorCarrinho: number,
  cupomDigitado: string,
  listaCupons: Array<Cupom>,
) {
  if (valorCarrinho <= 0) throw new Error('Valor do carrinho inválido!')

  for (const { codigo, valorMinimo, descontoPorcentagem } of listaCupons) {
    if (codigo.toLowerCase() === cupomDigitado.toLowerCase()) {
      if (valorCarrinho < valorMinimo) {
        return 'O valor mínimo para usar este cupom não foi atingindo'
      }
      let desconto = valorCarrinho * (descontoPorcentagem / 100)
      return valorCarrinho - desconto
    }
  }
  return 'Cupom inexistente'
}
