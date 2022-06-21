function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let op;

while(op != -1){
  op = getRandomInt(-1, 10);
  console.log(op);
}

