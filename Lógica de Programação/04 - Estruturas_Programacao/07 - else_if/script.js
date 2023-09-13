// Calcular a média de um aluno. Se méddia >= 7 -> "Aprovado", do contrário exibir a mensagem "Reprovado".

// let nota = 7;

// if(nota >= 7){
//     console.log("Aprovado!");
// }
// else if(nota >= 5){
//     console.log("Recuperação.");
// }
// else{
//     console.log("Reprovado!");


let nota1 = parseFloat(prompt("Digite sua Nota 01: "))
let nota2 = parseFloat(prompt("Digite sua Nota 02: "))
let nota3 = parseFloat(prompt("Digite sua Nota 03: "))
let nota4 = parseFloat(prompt("Digite sua Nota 04: "))

let media = (nota1+nota2+nota3+nota4)/4;

if(media >= 7){
    console.log(`Aprovado! Nota final: ${media.toFixed(2)}`);
}
else if(media >= 5){
    console.log(`Recuperação. Nota final: ${media.toFixed(2)}`);
}
else{
    console.log(`Reprovado! Nota final: ${media.toFixed(2)}`);
}