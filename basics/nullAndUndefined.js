let valor; //não inicializada
console.log(valor)//imprimirá undefined, porque o valor da variável declarada ainda não foi definido.

valor = null;//null representa valor nulo, é uma variável vazia, sem nenhum tipo de dado
console.log(valor);

let produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined;
console.log(!!produto.preco);
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);
console.log(produto.preco);