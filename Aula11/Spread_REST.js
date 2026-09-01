const pessoa = {
    nome: "Melissa",
    idade: 29,
    profissao: "Desenvolvedora"
}

const melissa1 = {
    nome: "Melissa",
    idade: 29,
    profissao: "Desenvolvedora"
}


//Utilizando o SPread Operator para clonagem

//Criamos um novo objeto e espalhamos as propriedades do objeto original

const melissa2 = {...melissa1};
melissa2.idade = 30;

console.log(melissa1);
console.log(melissa2);

//Atualizando propriedades com o Spread Operator


let melissa3 = {
    ...melissa2,
    profissao: "Desenvolvedora Senior",
    possuiCNH: true
}

console.log(melissa3);

//Separando propriedades com o REST Operator

//É possível separar a propriedade nbome em uma variável diferente e o resto fica igual

const {nome, ...restante} = melissa1;

console.log(nome);
console.log(restante);
