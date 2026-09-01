const pessoa = {
    nome: "Evangeline",
    idade: 8,
    profissao: "Estudante"
};

console.log(pessoa.nome);
console.log(pessoa.idade);

//aplicando o destructuring

const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

function saudacao(pessoa){
    console.log("Olá", pessoa.nome);
}

saudacao(pessoa);

//Utilizando destructuring em funções

function saudacao({nome , idade}){
    console.log("Olá", nome);
    if (idade > 18) {
        console.log("maior de idade");
    }
}

//aplicando destructuring em arrays

const frutas = ["uva", "Banana"];

const [primeira, segunda] = frutas;
