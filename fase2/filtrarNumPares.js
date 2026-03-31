function filtrarPares(array){
    let pares = [];

    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) pares.push(array[i])
    }

    return pares.sort((a,b) => a - b);
}

console.log(filtrarPares([1,2,5,6,88,100,3,4]))