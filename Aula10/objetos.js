//OBJETO
//estrutura que agrupa dados relacionados em formatos de pares chave-valor.

//Criando e Manipulando Objetos

let pessoa = {
    nome: "Ana",
    idade: 25,
    temCarteira: true
};

//fez aniversário
pessoa.idade = 26;

//Quando quisermos acessar apenas para ler um valor, utilizamos pessoa.nome

//Sintaxe do objeto:
//Pessoa recebe um objeto, abrindo e fechando chaves
//Damos um nome, idade e se ela possui CNH

//Adicionando e acessando propriedades de objetos

pessoa.sobrenome = "Paula";

console.log("Nome: ", pessoa.nome);
console.log("Sobrenome: ", pessoa.sobrenome);


