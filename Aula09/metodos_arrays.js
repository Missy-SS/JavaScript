const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//método Filter
//Filtrar elementos com base em uma condição específica
//Acessa o número e retorna uma condição verdadeira ou falsa
//Filtra apenas quando é verdadeira

//Filtrando números pares

const numerosPares = numeros.filter((numero) => {
    return numero % 2 == 0;
});

//Armazenar o resultado em um variável

console.log("Todos os números: ", numeros);
console.log("Todos os números pares: ", numerosPares);

//Filtrando números ímpares

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 != 0;
});

console.log("Todos os números ímpares: ", numerosImpares);

//Utilizando o método map
//Transforma a lista em uma lista de elementos diferentes

const numerosDobrados = numeros.map((numero) => {
    return numero * 2;
});

console.log("Lista mapeada", numerosDobrados);
