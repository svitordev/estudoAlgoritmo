function parOuImpar(num) {
  const restoNum = num % 2;
  if (restoNum === 0) {
    console.log(`O número: ${num} é par!`);
  } else {
    console.log(`O número: ${num} é ímpar!`);
  }
}
parOuImpar(100);
parOuImpar(99);
