//Set e Maps

//Set é uma estrutura de dados que guarda valores únicos
//Coleção onde nenhum valor pode se repetir

let numero = new Set();

numero.add(1);

numero.add(2);

numero.add(2); //Não será adicionado novamente

console.log(numero); 

//Bom para remover duplicatas de um array
//Para ter certeza se um valor já existe no conjunto

//Removendo duplicatas:

let arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5];

let arraySemDuplicatas = [...new Set(arrayComDuplicatas)];

console.log(arraySemDuplicatas);

//Map é uma estrutura que permite armazenar pares de chave e valor
//Pode usar com qualquer tipo de dado como chave
//Mantém a ordem em que os itens foram inseridos

let mapa = new Map();

mapa.set("nome", "Mel");
mapa.set("idade", "18");

console.log(mapa.get("nome"));
console.log(mapa.get("idade"));
