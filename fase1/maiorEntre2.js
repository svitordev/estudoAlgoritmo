function maiorEntre2(num1, num2) {
  if (num1 === num2) {
    return `Deu empate com o número: ${num1}`;
  } else if (num1 > num2) {
    return `O maior número é: ${num1}`;
  } else {
    return `O maior número é: ${num2}`;
  }
}
console.log(maiorEntre2(5,5));
console.log(maiorEntre2(50,5));
console.log(maiorEntre2(5,70));