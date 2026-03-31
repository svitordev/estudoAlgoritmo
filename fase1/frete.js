function frete(valorCompra, estado) {
  if (valorCompra >= 200) {
    console.log("Frete Grátis!");
  } else if (valorCompra >= 150 && estado === "CE") {
    console.log("Frete Grátis!");
  } else {
    console.log("Frete Normal!");
  }
}

frete(100,"CE");
frete(160,"CE");
frete(180,"PE");
frete(200,"PE");