const pessoa = {
    nome: "Melissa",
    idade: 18,
    pets: ["Neves", "Astuto","Bob"],
    nacionalidade: "Brasileira"
}

//percorre as chaves do objeto
for(const chave in pessoa) {
    console.log("Chave: ", chave);
    console.log("Valor: ", pessoa[chave]);
}

//Utilizando métodos de objetos

//Obter todas as chaves de um objeto
const chaves = Object.keys(pessoa);

//Obter os valores
const valores = Object.values(pessoa);

//Obter pares de chave e valor
const entradas = Object.entries(pessoa);

console.log("Chaves:", chaves);
console.log("Valores:", valores);
console.log("ENtradas (chave/valor):", entradas);
