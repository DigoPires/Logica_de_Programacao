// 04 - Imagine que você é um professor e precisa calcular a média final das notas de um aluno e informar a sua situação (aprovado, recuperação ou reprovado). Escreva um programa que solicite ao usuário que informe o nome do aluno e as 4 notas utilizando a função prompt. Em seguida, calcule a média final e armazene o resultado na variável mediaFinal. Utilize uma estrutura condicional para verificar a situação do aluno e exiba uma mensagem de alerta contendo o nome do aluno, a média final em pontos e a sua situação. 

let nome = prompt("Digite seu nome: ");

let nota1 = Number(prompt("Digite sua primeira nota: "));
let nota2 = Number(prompt("Digite sua segunda nota: "));
let nota3 = Number(prompt("Digite sua terceira nota: "));
let nota4 = Number(prompt("Digite sua quarta nota: "));

let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

if(mediaFinal >= 7){
    alert(`Parabéns ${nome}, você foi Aprovado! \nMedia Final: ${mediaFinal} `);
} else if (mediaFinal >= 5){
    alert(`Olá ${nome}, você ficou de Recuperação. \n Media Final: ${mediaFinal}`);
} else {
    alert(`Olá ${nome}, você foi Reprovado. \n Media Final: ${mediaFinal}`);
}