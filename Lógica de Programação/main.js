const exercicio1 = (a,b,c) => {
    console.log("\nExercício 1")
    if((a+b) > c){
        console.log(`${a}+${b} é maior que ${c}`)
    }
    else if((a+b) === c){
        console.log(`${a}+${b} é igual a ${c}`)
    }
    else{
        console.log(`${a}+${b} é menor que ${c}`)
    }
}

//exercicio1(1,2,3);


const exercicio2 = (nome, sexo, estadoCivil) => {
    console.log("\nExercício 2")
    console.log(nome);
    console.log(sexo);
    console.log(estadoCivil);
    if((sexo == "F" || sexo == "f") && (estadoCivil == "CASADA" || estadoCivil == "casada")){
        casada = parseFloat(prompt("Digite o tempo de casada (anos): "));
        console.log(`Casada a ${casada} anos.`);
    }
}

//exercicio2("Maria", "F", "solteira");


const exercicio3 = (number) => {
    console.log("\nExercício 3")
    if(number%2 == 0){
        console.log(`${number} é um número par.`)
    }
    else{
        console.log(`${number} é um número ímpar.`)
    }
}

//exercicio3(3);


const exercicio4 = (time) => {
    console.log("\nExercício 4")
    tabelaTimes = ["Botafogo", "Flamengo", "Grêmio", "São Paulo", "Fluminense", "Palmeiras", "Bragantino"];
    for(let i = 0; i<tabelaTimes.length; i++){
        if(time == tabelaTimes[i]){
            console.log(`O time ${time} está na ${i+1}ª posição.`);
            return time
        }
    }
    console.log(`O time ${time} está abaixo dos 7 primeiros.`);
}

//exercicio4("São Paulo");


function exercicio5(condicao, preco){
    console.log("\nExercício 5")
    if(condicao == 1){
        console.log(`Preço do produto: ${preco}`);
        console.log(`Condição: ${condicao}`);
        console.log("À vista em dinheiro ou cheque, recebe 10% de desconto");
        console.log(`Valor Total: R$${preco - (preco * 0.10)}`);
    }
    else if(condicao == 2){
        console.log(`Preço do produto: ${preco}`);
        console.log(`Condição: ${condicao}`);
        console.log("À vista em cartão ou crédito, recebe 15% de desconto");
        console.log(`Valor Total: R$${preco - (preco * 0.15)}`);
    }
    else if(condicao == 3){
        console.log(`Preço do produto: ${preco}`);
        console.log(`Condição: ${condicao}`);
        console.log("Em duas vezes, preço normal de etiqueta sem juros.");
        console.log(`Valor Total: R$${preco}`);
    }
    else if(condicao == 4){
        console.log(`Preço do produto: ${preco}`);
        console.log(`Condição: ${condicao}`);
        console.log("Em 3 vezes ou mais, preço normal de etiqueta mais juros de 10%.");
        console.log(`Valor Total: R$${preco + (preco*0.10)}`);
    }
}

//exercicio5(4, 50);

const exercicio6 = () => {
    console.log("\nExercício 6")
    for (let i = 100; i<200+1; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}

//exercicio6();

function exercicio7(){
    let soma = 0;
    for (let i = 1; i<500+1; i++){
        if (i % 3 == 0){
            soma += i;
        }
    }
    console.log(soma);
}

//exercicio7();

function exercicio8(nota){
    nota >= 5? console.log("Aprovado") : console.log("Reprovado");
    nota % 2 == 0? console.log(nota+5) : console.log(nota+8);
}

//exercicio8(5);

const exercicio9 = (num) => {
    num > 0? console.log(`Positivo. O dobro de ${num} é ${num*2}`) : console.log(`Negativo. O triplo de ${num} é ${num*3}`);
}

//exercicio9(-2);

function exercicio10(nome, idade){
    console.log(nome);
    !(idade < 18)? console.log(`Você tem ${idade} anos. Pode dirigir.`) : console.log(`Você tem ${idade} anos. Não pode dirigir.`);
}

//exercicio10("Rodrigo", 18);

function exercicio11(num){

    let x = 1;
    while(x<=10){
        console.log(`${num} x ${x} = ${num*x}`);
        x++;
    }
    console.log(" ")
    for(let i = 1; i<=10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

//exercicio11(3);

const exercicio12 = () => {
    for (let i = 0; i<5; i++){
        num = parseFloat(prompt());
        num <= 0 || i == 0? maior = num :"";
        console.log(`Numero digitado: ${num}`);
        num > maior? maior = num :"";
        console.log(`Maior número digitado: ${maior}`);
    }
    
}

// exercicio12();