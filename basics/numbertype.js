const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

let avaliacao1 = 9.871
let avaliacao2 = 6.871

let total = avaliacao1 * peso1 + avaliacao2 * peso2
let media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //limita o número de casas decimais que será impresso
console.log(media.toString()) //converte o valor de media para binário

console.log(7 / 0) // JS entende limites, divisões por 0 não são consideradas inconsistências matemáticas, nem mesmo dão erro, e sim geram valor Infinito
console.log('10' / 2) //strings com valor numérico são convertidas automaticamente para number em operações
console.log('3' + 2);//operações de soma entre strings e numbers geram concatenação, e não somas
console.log('3' - 2);//já operações de subtração geram operação matemática de subtração
console.log(0.1 + 0.7); // as vezes, operações de ponto flutuante podem não ter precisão exata devido à especificação do IEEE, voltada para desempenho de código

let numbertostring;

numbertostring = String(10);
console.log(typeof numbertostring);
numbertostring = (10).toString();
console.log(typeof numbertostring);
numbertostring = Number(numbertostring);
console.log(typeof numbertostring);
console.log(numbertostring);
