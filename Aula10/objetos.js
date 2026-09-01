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

//Criando um exemplo adicional com objetos

const livro = {
    titulo: "O Hobbit",
    autor: "J. R. R. Tolkien",
    paginas: 310
};

//Expandindo propriedades de objetos

livro.publicado = true;

livro.idioma = ["Inglês", "Português", "Espanhol"];

console.log("Título do livro: ", livro.titulo);
livro.publicado = true ? console.log("Livro foi publicado!") : console.log("Livro não foi publicado ainda");
console.log("Idiomas disponíveis ", livro.idioma);
