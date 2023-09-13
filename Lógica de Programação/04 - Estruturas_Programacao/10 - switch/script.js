// // // let diaSemana = 3;

// // // switch(diaSemana){
// // //     case 1:
// // //         console.log("Segunda-Feira");
// // //         break;
// // //     case 2:
// // //         console.log("Terça-Feira");
// // //         break;
// // //     case 3:
// // //         console.log("Quarta-Feira");
// // //         break;
// // //     case 4:
// // //         console.log("Quinta-Feira");
// // //         break;
// // //     case 5:
// // //         console.log("Sexta-Feira");
// // //         break;
// // //     default:
// // //         console.log("Fim de Semana");
// // //         break;
// // // }

// // let nomeFruta = prompt();

// // switch(nomeFruta){
// //     case "limão":
// //     case "uva":
// //     case "laranja":
// //         console.log("Fruta Cítrica");
// //         break;
// //     case "abacate":
// //     case "manga":
// //         console.log("Fruta Tropical");
// //         break;
// //     default:
// //         console.log("Não é possível identificar o tipo de fruta.")
// //         break;
// // }

// let escolha = Number(prompt("Escolha uma das opções: \n[1] - Somar \n[2] - Subtrair \n[3] - Multiplicar \n[4] - Dividir"))
// let n1 = Number(prompt("Digite o Primeiro número: "));
// let n2 = Number(prompt("Digite o Segundo número: "));

// switch(escolha){
//     case 1:
//         alert(`A soma de ${n1} + ${n2} = ${n1+n2}`)
//         break;
//     case 2:
//         alert(`A subtração de ${n1} - ${n2} = ${n1-n2}`)
//         break;
//     case 3:2
//         alert(`A multiplicação de ${n1} x ${n2} = ${n1*n2}`)
//         break;
//     case 4:
//         alert(`A divisão de ${n1} : ${n2} = ${n1/n2}`)
//         break;
//     default:
//         alert("Não foi possível indentificar a opção escolhida.")
//         break;

// }

// let num = Number(prompt("Digite um número: "));

// switch(true){
//     case(num > 0):
//         alert(`O número ${num} é posítivo!`);
//         break;
//     case(num == 0):
//         alert(`O número ${num} não é negativo e nem positivo!`);
//         break;
//     case(num < 0):
//         alert(`O número ${num} é negativo!`);
//         break;
//     default:
//         alert("Entrada Inválida!")
//         break;
// }


function semana(){
    let diaSemana = Number(prompt("Insira um número (1 - 7): "));

    switch(diaSemana){
        case 1:
            alert("Domingo");
            break;
        case 2:
            alert("Segunda-Feira");
            break;
        case 3:
            alert("Terça-Feira");
            break;
        case 4:
            alert("Quarta-Feira");
            break;
        case 5:
            alert("Quinta-Feira");
            break;
        case 6:
            alert("Sexta-Feira");
            break;
        case 7:
            alert("Sábado");
            break;
        default:
            alert("Entrada Inválida!");
            semana();
    }
}

semana();2