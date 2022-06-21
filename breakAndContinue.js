const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let x in nums){
  if(x == 5){
    break; //quebra o laço quando a condição é satisfeita
  }
  console.log(`${x} = ${nums[x]}`);
}

for(let y in nums){
  if(y == 5){
    continue;//pula a iteração atual quando a condição é satisfeita
  }
  console.log(`${y} = ${nums[y]}`);
}

outside: // não é interessante usar isso
for(let i in nums){
  for(let j in nums){
    if(i == 1 && j == 3){
      break outside;
    }
    console.log(`${i},${j}`);
  }
}