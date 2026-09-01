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

//Explorando o objeto livro

//Adicionar um idioma
livro.idioma.push("Mandarim");

console.log("Idomas disponíveis: ", livro.idioma);

livro.idioma.push("Francês");

console.log("Idiomas disponíveis: ", livro.idioma);

//Manipulando propriedades do objeto

console.log("Livro antes:", livro);
delete livro.paginas

console.log("Livro depois: ", livro);

//acessar propriedades com colchetes e strings

livro["autor"]

console.log("Autor do livro", livro["autor"])

//Criando e utilizando objetos alinhados

const autor = {
    nome: "J R R Tolkien",
    nacionalidade: "Britanico",
    idade: 98
}

console.log("Autor ", autor);

livro.autor = autor

console.log(livro)

livro.autor.nome
livro.autor.nacionalidade

livros: [livro]

