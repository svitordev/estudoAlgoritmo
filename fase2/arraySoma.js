function arraySoma(array){
    return array.reduce((acc, n) => acc + n, 0)
    
}
console.log(arraySoma([1,5,4]))
console.log(arraySoma([10,55,45]))