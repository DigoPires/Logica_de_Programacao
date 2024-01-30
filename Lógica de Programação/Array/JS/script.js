// Array
const array = ["João", "Maria", "José"];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array);

// Adicionando elemento ao array
const listaNomes = ["João", "Maria"];
listaNomes.push("Beatriz");
console.log(listaNomes);

// Remover elemento ao array
// listaNomes.pop();
// console.log(listaNomes);

//Remover um elemento específico da array
listaNomes.splice(1,1);
console.log(listaNomes);

// Alterando um elemento do array
const listaNomes2 = ["João", "Maria"];
listaNomes2[0] = "Pedro";
console.log(listaNomes2);

// Percorrendo o array com loop for
const listaNomes3 = ["Lucas", "Kate", "Marcia"];

for(let i = 0; i<listaNomes3.length; i++){
    console.log(listaNomes3[i])
}

// Percorrer o array com o loop forEach
const listaNomes4 = ["Jhonatan", "Allan", "Rodrigo"];

listaNomes4.forEach((valor) => {
    console.log(valor)
});

// Concatenar dois arrays
const numeros = [6,7,8];
console.log(numeros.length);

const outrosNumeros = [3,9,2];
const juncaoNumeros = numeros.concat(outrosNumeros);
console.log(juncaoNumeros);

// shift
const nomes = ["Marcos", "Vinicius", "Lorena"];
const primeiroNome = nomes.shift();
console.log(nomes);

// unshift
const numerosTeste = [1, 2, 3];
numerosTeste.unshift(8);
console.log(numerosTeste);

// indexOf
const frutas2 = ["maça","banana","manga","abacaxi"];
console.log(frutas2.indexOf("maça"));
console.log(frutas2.indexOf("abacaxi"));
console.log(frutas2.indexOf("laranja"));

// lastIndexOf
const letras = ["a","b","c","d","e"];
 
console.log(letras.lastIndexOf("a"));
console.log(letras.lastIndexOf("b"));
console.log(letras.lastIndexOf("z"));

// slice
const testSlice = ["a","b","c","d","e","f"];

const subArray = testSlice.slice(0,2);
console.log(testSlice);
console.log(subArray);

// Buscando um array via slice numa posição inexistente
const frutasDona = ["maça", "banana", "laranja"];

const temMaca = frutasDona.includes("maça");
const temMelancia = frutasDona.includes("melancia");
console.log(temMaca);
console.log(temMelancia);

// Includes à partir de uma posição
const letrasNovo = ["a","b","c","d","a"];
const temApos1 = letrasNovo.includes("a",1)
console.log(temApos1)

// Reverse
const testReverse = [1,2,3,4,5];

testReverse.reverse();
console.log(testReverse);

// Spread
const testSpread = ["a","b","c","d","e"];
const novaLetras = [...testSpread].reverse();
console.log(novaLetras)

// Upper Case
const fraseA = "Boas vindas!";
console.log(fraseA.toUpperCase());

// Lower Case
const fraseB = "QUE LEGAL!";
console.log(fraseB.toLowerCase());