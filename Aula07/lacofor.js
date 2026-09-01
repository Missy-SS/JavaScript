for(let contador = 1; contador <= 10; contador ++) {
    console.log("Número atual: ", contador);
}
//numeros pares e impares
for(let numero = 0; numero <= 15; numero++) {
    if(numero % 2 == 0){
        console.log("Número par encontrado:",numero);
    }
    if(numero % 2 > 0){
        console.log("Este número é ímpar: ", numero);
    }
}

const palavra = "calopsita"

for (let contador = 0; contador < palavra.length; contador++){
    console.log(palavra[contador])
}
