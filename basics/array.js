const valores = [7.7, 8.9, 6.3, 9.2] //4 indices, 0 a 3
console.log(valores)//imprime o array inteiro;
for (let i = 0; i < valores.length; i++) {//loop q imprime um item do array por vez
  console.log(valores[i])
}

valores[4] = 12 // alocação dinâmica automática
console.log(valores);

valores.push('jorge', null, {id: 12})
console.log(valores);

valores.pop();//retorna o último valor do array, retirando ele da estrutura
console.log(valores);

delete valores[valores.length-1];
console.log(valores);

console.log(typeof valores);