const idade = 17;
const maiorDeIdade = 18;
const possuiCNH = false;

//condições para dirigir
// && representa o "e"
const podeDirigir = maiorDeIdade && possuiCNH;
console.log("Pode dirigir?", podeDirigir);

//condições para viajar sozinha
// || representa o "ou"

const podeViajarSozinha = maiorDeIdade || possuiCNH; // OR
console.log("Pode viajar sozinha?", podeViajarSozinha);

//condições para precisar de um acompanhante

const precisaDeAcompanhante = !maiorDeIdade;
console.log("Precisa de acompanhante?", precisaDeAcompanhante);
