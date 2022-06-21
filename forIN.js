const names = ['Marina', 'Nicole', 'João', 'Lucas']

for (let i in names) {
  console.log(i, names[i]);
}
console.log(' ');

const pessoa = {
  nome: 'Vaipo',
  sobrenome: 'do Corsa',
  idade: 21,
  peso: 66
}

for(let c in pessoa){
  console.log(`${c} = ${pessoa[c]}`)
}
