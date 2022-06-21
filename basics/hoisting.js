console.log('a =', a);
var a = 2; //variáveis declaradas com var sofrem efeito de hoisting, são movidar para o topo e declaradas desde o inicio do código, mas só são associadas a algum valor quando aparecem no código em si
console.log('a =', a);

console.log('b =', b);
let b = 2; //variáveis declaradas com let não sofrem efeito de hoisting e se forem utilizadas dessa maneira podem gerar erros no código
console.log('b =', b);