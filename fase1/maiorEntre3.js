function maiorEntreTres(num1, num2, num3) {
  let maiorNumero;
  if (num1 === num2 && num2 === num3) {
    console.log("Os 3 números são íguais!");
  } else {
    if (num1 > num2) {
      if (num1 > num3) {
        maiorNumero = num1;
      } else {
        maiorNumero = num3;
      }
    } else if (num2 > num3) {
      maiorNumero = num2;
    } else {
      maiorNumero = num3;
    }
  }

  //undefinid pq se o maior numero for 0, retornará false
  if (maiorNumero !== undefined) {
    console.log(`O maior número é: ${maiorNumero}`);
  }
}
maiorEntreTres(3, 3, 3);
maiorEntreTres(1, 2, 3);
maiorEntreTres(4, 2, 1);
maiorEntreTres(2, 5, 1);
maiorEntreTres(6, 6, 1);
maiorEntreTres(1, 7, 7);
