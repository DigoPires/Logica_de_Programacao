// 1. Escreva um programa em JavaScript que solicite um valor inteiro ao usuário e calcule a soma dos valores inteiros de 1 até o valor informado. Utilize uma estrutura de repetição while ou for para realizar o cálculo e exibir o resultado no console. 

function exercicio1(){
    let num = parseInt(prompt("Digite um número: "));
    let soma = 0;
    
    for(let i = 0; i<=num; i++){
        console.log(i)
        soma += i
    }
    console.log(`A soma do número 1 até o número ${num} é igual a ${soma}`)

}

// exercicio1()


// 2. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é primo ou não. Utilize uma estrutura de repetição for para verificar se o número é divisível apenas por 1 e por ele mesmo, e exiba a mensagem correspondente no console.

function exercicio2(){
    let num = 5;
    let qtDivisor = 1;
    
    for(let i = 1; i<num; i++){
        if(num%i==0){
            qtDivisor += 1;
        }
    }
    qtDivisor == 2? console.log(`O número ${num} é primo.`) : console.log(`O númeroo ${num} NÃO é primo.`);
}

// exercicio2()


// 3. Escreva um programa em JavaScript que solicite uma palavra ao usuário e verifique se ela é um palíndromo. Utilize uma estrutura de repetição for para verificar se a palavra é lida da mesma forma de trás para frente e vice-versa, e exiba a mensagem correspondente no console. 

function exercicio3(){
    let palavra = "arara";
    let palindromo = "";

    for(let i = palavra.length-1; i>=0; i--){
        palindromo += palavra[i];
    }
    palavra == palindromo? console.log(`A palavra "${palavra}" é um palíndromo.`) : console.log(`A palavra "${palavra}" NÃO é um palíndromo.`);
}

// exercicio3()


// 4. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é um número primo de Mersenne. Utilize uma estrutura de repetição for para verificar se o número é um número primo de Mersenne, e exiba a mensagem correspondente no console. 

function exercicio4(){
    let num = 11;
    let qtDivisor = 1;
    
    for(let i = 0; i<num; i++){
        num%i == 0? qtDivisor += 1: "";
    }
    qtDivisor == 2? console.log(`Fórmula de Mersenne 2^p - 1. \nO primo de Mersenne para o número ${num} é igual a ${(2**num) - 1}.`): console.log(`O número ${num} NÃO é primo`); 
}

// exercicio4()

// 5. Escreva um programa em JavaScript que solicite dois números ao usuário e calcule o máximo divisor comum (MDC) entre eles. Utilize uma estrutura de repetição while ou for para realizar o cálculo e exibir o resultado no console. 

function exercicio5(){
    let num1 = 20;
    let num2 = 16;

    let resto;
    do{
        resto = num1 % num2;
        console.log('resto =',resto);
        num1 = num2;
        console.log('num1 =',num1);
        num2 = resto;
        console.log('num2 =',num2);
    } 
    while (resto != 0);

    console.log(num1);
}

//exercicio5()


// 6. Escreva um programa em JavaScript que solicite um número ao usuário e exiba a sequência de Fibonacci correspondente a esse número. Utilize uma estrutura de repetição while ou for para calcular a sequência de Fibonacci e exibir os resultados no console.

function exercicio6(){
    let num = 7;
    let lista = [1,1];

    let antes = 1;
    let atual = 1;
    let prox = 1;


    for(let i = 0; i<=num; i++){
        prox = atual + antes
        antes = atual
        atual = prox
        lista.push(atual)
    }
    console.log(lista);
}

// exercicio6()

// 7. Escreva um programa em JavaScript que solicite um número ao usuário e exiba todos os seus divisores. Utilize uma estrutura de repetição for para verificar se cada número entre 1 e o número informado é divisor do número informado, e exibir os divisores encontrados no console. 

function exercicio7(){
    let num = 20;
    let divisores = 0;
    for(let i = 1; i<num; i++){
        if(num%i==0){
            console.log(`${i} é divisor de ${num}`);
            divisores += 1;
        }
    }
    console.log(`O número ${num} tem ${divisores} divisores.`)
}

//exercicio7()

// 8. Escreva um programa em JavaScript que solicite um número ao usuário e exiba a sua representação em binário. Utilize uma estrutura de repetição while ou for para realizar a conversão e exibir o resultado no console. 

function exercicio8(){
    let numDecimal = 5;
    let numBinario = numDecimal.toString(2);
    console.log(numBinario);

}

//exercicio8();

// 9. Escreva um programa em JavaScript que solicite uma frase ao usuário e exiba a quantidade de vogais e consoantes presentes na frase. Utilize uma estrutura de repetição for para percorrer a frase e contar as vogais e consoantes, e exibir os resultados no console.

function exercicio9(){
    let frase = "Ola tudo bem?";
    let contVogais = frase.match(/[aeiou]/gi).length;
    let contConsoantes = frase.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
   
    console.log(`A frase "${frase}" contém, ${contVogais} vogais e ${contConsoantes} consoantes.`)

    // let vogais = ["a","e","i","o","u"];
    // for(let i = frase.length; i>=0; i--){
    //     for(let x = 4; x>=0; x--){
    //         if(frase.toLowerCase()[i] == vogais[x]){
    //             contVogais += 1
    //         }
    //     }
    // }
    
}
// exercicio9()

// 10. Escreva um programa em JavaScript que solicite dois números ao usuário e calcule o mínimo múltiplo comum (MMC) entre eles. Utilize uma estrutura de repetição while ou for para realizar o cálculo e exibir o resultado no console.

function exercicio10(){
    let num1 = 12;
    let num2 = 45;
    let resto, x, y;

    x = num1;
    y = num2;
    while(resto!=0){
      resto = x % y;
      console.log('resto =',resto);
      x = y;
      console.log('x =',x);
      y = resto;
      console.log('y =', y);
    }
    console.log(`(${num1}x${num2}):${x} = ${(num1*num2)/x}`);
}

exercicio10()