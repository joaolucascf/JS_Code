function printSum(a, b) {
  console.log(a + b);
}

printSum(2, 4);
printSum(2);

function sumNumbers(a, b = 0){ //por padrão quando o valor não é passado a função assume que o valor é o valor que foi pré-assumido na função
  return a + b;
}

a = sumNumbers(3, 10);
b = sumNumbers(3);
console.log(sumNumbers(2, 2));
console.log(a);
console.log(b);