// Object Literals

const objetoPessoa = {
    nome: "João",
    idade: 30
};

console.log(objetoPessoa.nome);
console.log(objetoPessoa);
console.log(typeof objetoPessoa);


// Adicionando uma propriedade ao objeto

const funcionario = {
    nome: "Luis",
    matricula: 34567
};

console.log(funcionario);
funcionario.sobrenome = "Santana";
console.log(funcionario);


// Método Assign

const objeto1 = {
    nome: "João",
    idade: 25
};

const objeto2 = {
    altura: 1.80,
    genero: "masculino"
};

const objetoDestino = {};

Object.assign(objetoDestino, objeto1, objeto2);
console.log(objetoDestino);


// Método Keys

const objeto = {
    nome: "Joaquim",
    idade: 21
};

const chaves = Object.keys(objeto);
console.log(chaves);


// Mutação - Atribuição

const hospede = {
    nome: "Alberto"
};

hospede.nome = "Junior";
console.log(hospede);

// Mutação - Inserção

hospede.sobrenome = "Lima";
console.log(hospede);

// Mutação - Operador de Adição

const hospedeNovo = {
    nome: "Mariana",
    idade: 56
};

hospedeNovo.idade += 2;
console.log(hospedeNovo.idade); 

// Mutação - Delete

delete hospedeNovo.nome;
console.log(hospedeNovo);


// Método String: Trim
const textoEspacado = "    Essa é uma string com espaços em branco    ";
console.log(textoEspacado);

const textoSemEspacos = textoEspacado.trim();
console.log(textoSemEspacos);


// Método padStart

const numero = "1234";
// Preencher com 0 pra atingir 8 caracteres 
const numeroFormatado = numero.padStart(8, "0");
console.log(numeroFormatado);

const codigo = "ABC";
// Preencher com traços pra atingir 5 caracteres
const codigoPreenchido = codigo.padStart(5, "-");
console.log(codigoPreenchido);


// Split

// Divide a string em uma array de palavras, usando espaços como separadores
const texto = "Essa é uma string com espaços em branco"; 
const palavras = texto.split(" ");
console.log(palavras);

// Divide a string em um array de números, usando vírgulas como separadores
const numeros2 = "1,2,3,4,5".split("");
console.log(numeros2);

// Divide a string em um array de 3 elementos, usando espaços como separadores
const partes = texto.split(" ", 3);
console.log(partes);


// Join

// Transforma o array em uma string, com traços como separador
const numerosJoin = [1, 2, 3, 4, 5];
console.log(numerosJoin.join(" - "));

// Transforma os elementos de um array em string e acrescenta um elemento de string
const frutas = ["maça", "banana", "laranja"]
const textoFrutas = frutas.join(" e ");
console.log(textoFrutas);


// Repeat

// Repetindo a string 3 vezes
const  testandoRepeat = "Olá";
const textoRepetido = testandoRepeat.repeat(3);
console.log(textoRepetido)


// Rest Operator
function minhaFuncao(a, b, ...args){
    console.log(a);
    console.log(b);
    console.log(args);
}

minhaFuncao(1, 2, 3, 4, 5);


// Iterando sobre um array
const frutasA = ["maça", "uva", "melância"];

for(const fruta of frutasA){
    console.log(fruta)
}


// Desestruturando Objetos
const usuario = {
    primeiroNome: "José",
    sobrenome: "Xavier",
    profissao: "Pedreiro"
}

const[primeiroNome, sobrenome, profissao] = Object.values(usuario);
console.log(primeiroNome, sobrenome, profissao);


// Desestruturando Array
const array = ["João", "Maria", "Pedro"];
const[primeiro, segundo, terceiro] = array;
console.log(primeiro, segundo);