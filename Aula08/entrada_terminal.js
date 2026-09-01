//readline = biblioteca do Node que consegue interagir com o terminal

//importar a funcionalidade e carregar a biblioteca
const readline = require("readline");

//Criando a interface de leitura

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//question é responsável por fazer uma pergunta no terminal

leitor.question("Qual é o seu nome?", (nome) => {
    console.log("Olá", nome);
    console.log("Boas-vindas ao nosso sistema!");
        leitor.question("Qual é a sua idade?", (idade) => {
            if (idade > 18){
                console.log("Uau! Você já pode tirar a sua CNH");
            } else {
                console.log("Você ainda não pode tirar sua CNH");
            }
            leitor.close();
    });
});
//Interface para interagir com a pessoa usuária do sistema
//Faz a pergunta
//Captura o nome
//Exibe a mensagem de boas-vindas
//Encerra a operação
