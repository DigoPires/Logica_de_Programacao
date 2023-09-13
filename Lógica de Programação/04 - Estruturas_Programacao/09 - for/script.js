// Imprimir no console os numeros de 1 até 5

// for(let i = 1; i<=5; i++){
//     console.log(i);
// }

// let num = 20

// for(let i = 0; i<=num; i++){
//     console.log(i)
// }


// for(let x = parseInt(prompt()); x>=0; x--){
//     console.log(x)
// }

let num = 20;
let soma = 0;

for(let i = 0; i<=num; i++){
    if(i % 2 != 0){
        soma+=i
        console.log(i) 
    }
}
console.log(`A soma dos numéros ímpares de ${num} é: ${soma}`)

// let num = 1
// num%2 === 0? num += 1: "";

// for(let i = num; i<=30; i+=2){
//     console.log(i)
// }

// for(let i = 100; i>=0; i-=5){
//     console.log(i)
// }

// let num = 7;

// for(let i = 1; i<=10; i++){
//     console.log(`${i} x ${num} = ${i*num}`)
// }

// let num = parseInt(prompt("Digite um número: "))
// for(let i = 0; i<=num; i+=2){
//     console.log(i)
// }

// let num1 = 20;
// let num2 = 10;

// num1 < num2? [num1, num2] = [num1, num2] : [num2, num1] = [num1, num2];

// for(let i = num1; i<=num2; i++){
//     console.log(i)
// }

// if(num1>num2){
//     for(let i = num2; i<=num1; i++){
//         console.log(i)
//     }
// }else{
//     for(let i = num1; i<=num2; i++){
//         console.log(i)
//     }
// }
