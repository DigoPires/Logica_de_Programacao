//Funcão de prompt


//const nome = prompt("Qual seu nome?");
//console.log(nome)

//const idade = prompt ("Qual sua idade?");
//console.log(idade);

//alert("Erro ao preencher o formulário")


//Retornando o valor absoluto de 5
const abs = Math.abs(-5);
console.log(abs);

//Arredondar 3.5 para o inteiro mais proximo 
const round = Math.round(3.5);
console.log(round);

//Retorna a raiz quadrada de 16
const sqtr = Math.sqrt(16);
console.log(sqtr)

//Elevando ao cubo
const pow = Math.pow(2, 3);
console.log(pow)


//Exibindo uma mensagem de aviso no console
console.warn("Atenção essa é uma mensagem de aviso.")


//Exibindo uma mesangem de erro na tela
console.error("Ocorreu um erro");

//Exibindo uma mesangem informativa no console
console.info("Esta é uma mesansagem informativa.")

//Criando um grupo de mensagem no console
console.group("Mesagem de teste");
console.log("Esta é uma mensagem");
console.log("Esta é outra mensagem de teste");
console.groupEnd("");


//Continue
for (let i = 1; i <= 7; i++) {
    console.log(i)
    //Pular a impressão do número 5

    if (i === 5) {
        continue;
    }

    //Function
    const a = function multiplicar(num1, num2) { //Declarando uma função de *
        return num1 * num2 // a multiplicação
    }

    console.log(multiplicar(3, 7)) //Exibindo no console

}

//arrow function
const multiplicar = (num1, num2) => {
    return num1 * num2
}
console.log(multiplicar(3, 3))