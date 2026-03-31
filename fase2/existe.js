function verificarExistirIncludes(array, valor) {
  if (array.includes(valor)) {
    return true;
  } else {
    return false;
  }
}
console.log(verificarExistirIncludes(["Vitor", "existir"], "existir"));
console.log(verificarExistirIncludes(["Vitor", "nãoExistir"], "existir"));

function verificarExistirFor(array, valor) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valor) return true;
  }
  return false;
}
verificarExistirFor(["Vitor", "existir"], "existir");
verificarExistirFor(["Vitor", "nãoExistir"], "existir");
