//FUNÇÃO SAUDACAO

//Construção tradicional

// function saudacao(nome) {
//     console.log("Olá", nome)
// }

//Uso de ARROW FUNCTION

const saudacao = nome => console.log("Olá", nome)

saudacao("Mel")
saudacao("Vanessa")
saudacao("Day")


//FUNÇÃO CALCULAR O DOBRO

//Construção tradicional

// function calcularDobro (numero){
//     return numero * 2
// }

//Uso de ARROW FUNCTION

const calcularDobro = numero => numero * 2

const numeroDobrado = calcularDobro(4)
console.log("O dobro de 4 é:", numeroDobrado)


//FUNÇÃO SAUDACOES
//ARROW FUNCTION

//Construção tradicional

// const saudacoes = (nome) => {
//     console.log("Vida longa e próspera", nome)
// }

//Uso de ARROW FUNCTION

const saudacoes = nome => console.log("Vida longe e próspera", nome)

saudacoes("Mel")

//FUNÇÃO COM CÁLCULO

function somar(a,b) {
    return a + b;
}
const resultado = somar(5, 7);
console.log(resultado)
