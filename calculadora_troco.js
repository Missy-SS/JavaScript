console.log("Boas-vindas a calculadora de troco!")

let valorCompra = 17.50;
let valorPago = 18.50;

let troco = valorPago - valorCompra;

if (troco == 0) {
    console.log("Não há troco.")
} else {
    console.log("Troco a devolver: ", troco);
}

console.log("Valor da compra: ", valorCompra);
console.log("Valor pago: ", valorPago);
