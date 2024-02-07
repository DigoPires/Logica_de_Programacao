// Objeto de JavaScript

const pessoa = {
    nome: "Maria",
    idade: 52,
    profissão: "Desenvolvedora de Sistemas"
};

// Transforme em JSON
const stringJSON = JSON.stringify(pessoa);
console.log(stringJSON);

//Converter de volta para objeto
const pessoa2 = JSON.parse(stringJSON)
console.log(pessoa2)

// JSON
const meuJSON = '{"nome": "Junior", "idade": 21, "skills":["HTML", "CSS", "JavaScript"]}';

console.log(meuJSON);
console.log(typeof meuJSON);

// JSON da string e transformar em objeto para JSON
const meuObjeto = JSON.parse(meuJSON);
console.log(meuObjeto);

// JSON Inválido
const invalidoJSON = '{"nome": "Junior", "idade": 21}'; // Junior necessita das "" para ser válido
const novoInvalidoNovo = JSON.parse(invalidoJSON);
console.log(novoInvalidoNovo)
