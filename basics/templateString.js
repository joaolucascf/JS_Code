const myName = 'Vaipo'
const greetings = 'Olá ' + myName + '!'
const greetingsTemplate = `Olá ${myName}!`//template strings podem acessar variáveis do código dentro de si

console.log(greetings, greetingsTemplate);

console.log(`1+1=${1+1}`);//template strings podem interpretar códigos dentro do marcador ${}

const caps = palavra => palavra.toUpperCase(); // declaração de função extremamente básica

console.log(`${caps('caralho')}!`); // template strings podem executar funções dentro do marcador ${}