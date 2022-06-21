//"string" e 'string' são maneiras aceitas de declarar strings, também utiliza-se cráse, mas só em situação de template string
const myName = 'Vaipo';// 5 letras, indíce 0-4

console.log(myName.charAt(2));
console.log(myName.charAt(5));//posição inválida, gera NULL
console.log(myName.charCodeAt(1));
console.log(myName.indexOf('o'));//retorna a posição na string onde está o caractere indicado no argumento, caso não exista, retorna -1;

console.log(myName.substring(1));//retorna uma substring do índice indicado no argumento até o final da String
console.log(myName.substring(0, 3));//retorna uma substring do indice do argumento 1 até o indice do argumento 2, sem incluir o indice do argumento 2

console.log('O '.concat(myName).concat(" é gostoso"));// concatena strings
console.log(myName.replace('a', 4));

console.log('Vaipo,Nica,Marina'.split(','));//split gera uma array a partir de um separador passado como argumento da função