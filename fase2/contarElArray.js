function contarElementos(array){
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        count ++;       
    }
    return count;
}
console.log(contarElementos([1,5,6,"ah", 124, true]))