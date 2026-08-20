//HOF => Higher Order Fuction
//Função que recebe outra função como parâmetro ou argumento

function calcular(n1, n2, op){
  return op(n1, n2)
}

function soma(num1, num2){
  return num1 + num2
}

function divisao(num1, num2){
  return num1 / num2
}

const resultadoSoma = calcular(3, 8, soma)
console.log("Resultado da soma: ", resultadoSoma)

const resultadoDivisao = calcular(10, 5, divisao)
console.log("Resultado da divisao: ", resultadoDivisao)
