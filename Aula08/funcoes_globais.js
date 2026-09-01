//setTimeout
//Executa um bloco de código, uma função, após um determinado período de tempo

function saudacao () {
    console.log("E ai, beleza?")
}

setTimeout(saudacao, 2000);
//unidade de medida em milissegundos

//setInterval
// Dois argumentos:
// Primeiro: o que queremos fazer; uma função
// Segundo: de quanto em quanto tempo; intervalo de tempo

let contador = 0;

const id = setInterval(() => {
    contador ++;
    console.log("Tempo decorrido (em segundos) = ", contador)
    if (contador == 10) {
        clearInterval(id);
    }
}, 1000);
