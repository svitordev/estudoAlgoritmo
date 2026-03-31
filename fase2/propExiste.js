function temPropriedade(obj, prop){
    for (const props in obj) {
        if(props === prop) return true;
    }
    return false;
}
console.log(temPropriedade({ nome: "Ana", idade: 20 }, "idade"))
console.log(temPropriedade({ nome: "Ana", idade: 20 }, "cidade"))