const frutas = ["Uva","Banana","Kiwi","Maçã","Morango"];

// Acessando elementos em Array

console.log(frutas);

console.log("Primeira fruta: ", frutas[0]);

console.log("Última fruta: ", frutas[4]);

//Contando elementos

console.log("Total de frutas: ", frutas.length);

//Adicionando elementos e acessando dinamicamente

frutas.push("Melancia");

console.log("Total de frutas depois de adicionar melancia", frutas.length);

//A última posição é o total de itens menos um

console.log("Últime fruta: ", frutas[frutas.length - 1]);
