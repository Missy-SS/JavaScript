const nome = "Mel";

if (nome) {
    console.log("Olá, ", nome);
} else {
    console.log("Ainda não sei seu nome");
}

const idade = 18;

if (idade != null) {
    if (idade != null && idade >= 18) {
        console.log("Maior de idade");
    } else if (idade >= 0 && idade < 18) {
        console.log("Menor de idade");
    }
}

//valor truthy e falsy
//todas as expressões são avaliadas como true ou false em contextos condicionais 
//JS tenta "adivinhar" o valor
//Truthy: valores que, embora não sejam exatamente true, são interpretados como verdadeiros.
//Falsy: valores que, embora não sejam exatamente false, são interpretados como falsos.
// falsy: false; 0 (o número zero); "" (string vazia); null; undefined; NaN (Not a number)

