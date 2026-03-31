function calculadora(num1, num2, operacao){
   
    let result;
    switch (operacao) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break;
        default: console.log("Operação inválida!")
            break;
    }

      //undefinid pq se o  result for 0, retornará false
    if(result!== undefined) console.log(`O resultado da operação é: ${result} `)
   
}

calculadora(7,10,"+")
calculadora(10,7,"-")
calculadora(5,5,"-")
calculadora(7,10,"*")
calculadora(100,10,"/")
calculadora(100,10)