//Função armazenada em variável
const imprimirSoma = function (a, b){
  console.log(a + b);
}

imprimirSoma(2, 3);

//Função Arrow armazenada em variável
const soma = (a, b) => {
  return a + b;
}

console.log(soma(2, 4));

//retorno implícito
const subtraction = (a, b) => a - b;
console.log(subtraction(2, 3));

const printf = a => console.log(a);
printf ("Jóia!");