function soma() {
  let sum = 0;
  for(let i in arguments){
    sum += arguments[i];
  }
  return sum;
}

console.log(soma(2, 5, 1, 2))