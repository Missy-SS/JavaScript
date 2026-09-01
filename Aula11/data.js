const agora = new Date()

console.log(agora)
//Extraindo informações específicas da data

//Obter o ano atual
console.log("Ano:", agora.getFullYear())

//Obter o mês
//O mês 0 representa janeiro (0-11)

console.log("Mês 0-11", agora.getMonth())

//Obter o dia do mês

console.log("Dia do mês:", agora.getDate())
//Obter horas e minutos

console.log("Hora:", agora.getHours())

console.log("Minutos:", agora.getMinutes())

//Criando datas específicas
//Ano, mês e dia
const nascimento = new Date(2007, 9, 27);

console.log(nascimento)

//Trabalhando com o formato ISO 8601
//Esse formato considera o fuso horário e garante que a data exibida corretamente
const data_nascimento = new Date("2007-09-27T00:00:00.00Z")

//Formatando datas para diferentes localidades

console.log("Data formatada (BR):", nascimento.toLocaleDateString("pt-BR"))
console.log("Data formatada (US):", nascimento.toLocaleDateString("en-US"))

//NewDate é uma API poderosa no JS
