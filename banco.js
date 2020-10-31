let balance = parseFloat(prompt('Digite seu saldo: '))
let product = prompt('Digite o nome do produto: ')
let price = parseFloat(prompt('Digite o valor: '))

if (balance >= price) {
    alert(`Sua compra do produto ${product} foi aprovada, seu saldo: ${balance - price}`)
} else {
    alert('Compra cancelada. Motivo: saldo insuficiente.');
}