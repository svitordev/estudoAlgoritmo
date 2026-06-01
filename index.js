let valor = 10;

let incremento = 5;

let multiplicador = 3;

valor += (valor > 5) ? incremento : 2; 

if (valor % 2 === 0) {

    valor *= multiplicador;

} else {

    valor -= multiplicador;

}

console.log(valor);