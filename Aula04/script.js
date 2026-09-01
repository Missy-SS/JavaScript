console.log("Bom dia!")

//variável global
//nomeVariável = valorAtribuido

// idade = 18
// console.log("Idade:", idade)
// dataAniversario = "27 de Outubro"
// console.log("Data de aniversário: ", dataAniversario)

//var pode declarar variáveis
//especificamos em qual parte do código o valor será acessível
//var é uma palavra reservada
//var idade = 20
//var dataAniversario = "8 de Julho"

//let é a forma atual de declarar variáveis
//let só existe dentro de um bloco de código
//let não permite acessar a variável antes de sua declaração
//let não sofre hoisting da mesma forma que var
//let é usada quando o valor precisa mudar


//let idade = 21
//let dataAniversario = "7 de Agosto"

//const possui um valor que não muda
//o valor não pode ser modificado

//const idade = 19
// dataAniversario = "7 de Setembro"

//Hoisting é quando as declarações de variáveis são "elevadas"
//ao top do seu contexto de execução.

let nome = "Evangeline";
let idade = 17;
let altura = 1.60;
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof altura);

let estaChovendo = false;

console.log(typeof estaChovendo);

let cidade;

console.log(typeof cidade);
//undefined siginifica que não existe valor definido

let aprendeuJS = null;

console.log(typeof aprendeuJS);
//null declara a ausência de valor

let simbolo = Symbol();

console.log(typeof simbolo);
//Symbol é uma forma de criar um valor único e imútavel
