// 05 - Imagine que você é um vendedor e precisa calcular o valor final da compra de um cliente levando em consideração um desconto. Escreva um programa que solicite ao usuário que informe o nome do cliente, o valor total da compra e a porcentagem de desconto utilizando a função prompt. Em seguida, calcule o valor final da compra com o desconto aplicado e exiba uma mensagem de alerta contendo o nome do cliente e o valor final da compra. 

let nomeCliente = prompt("Digite seu nome: ");
let valorTotal = Number(prompt("Valor total da compra: "));
let desconto = Number(prompt('Porcentagem de desconto (Não utilizar "%"): ')) / 100 ;

let result = valorTotal - (valorTotal*desconto);

alert(`Olá ${nomeCliente}, o valor final da sua compra é de R$${result}`);