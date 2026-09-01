let contador = 1;

while (contador <= 10) {
    console.log("Número atual: ", contador);
    contador++;
}

//do while
let numero = 1;
do {
    console.log("Número atual: ", numero);
    numero++
} while (numero <= 10);

//alternativas para iterar com segurança
const palavra = "exemplo";

for (const caractere of palavra) {
  console.log(caractere);
}
