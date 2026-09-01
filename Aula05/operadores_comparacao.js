//constantes para comparação

const idadeMel = 19;
const minhaIdade = 18;

//comparando igualdade e diferença
const saoIguais = idadeMel == minhaIdade;
console.log("São iguais?", saoIguais);
//tipo de dado booleano

//verificando maior e menor
const comparacao = idadeMel > minhaIdade;
console.log("É maior?", comparacao);

const comparacao_ = idadeMel < minhaIdade;
console.log("É menor?", comparacao_)

//analisando maioridade
const idade = 18;
const idadeIrma = 21;

const souMaiorDeIdade = idade >= 18;
const irmaMaiorDeIdade = idadeIrma >= 18;
console.log("É maior de idade?", souMaiorDeIdade);
console.log("Minha irmã é maior de idade?", irmaMaiorDeIdade);

//comparando tipos diferentes
const idadeMelissa = 17;
const minhaIdade_ = "18";

//comparação estrita
//== verifica se são iguais, === verifica se até os tipos são iguais
const comparacaoEstrita = minhaIdade_ === idadeMelissa;
console.log("São estritamente iguais?", comparacaoEstrita);
// string =! de int


