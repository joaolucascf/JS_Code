const printResult = function (note) {
  switch (Math.floor(note)) {
    case 10:
    case 9:
      console.log('hall of fame!'.toUpperCase())
      break
    case 8:
    case 7:
      console.log('Aprovado')
      break
    case 6:
    case 5:
    case 4:
    case 3:
      console.log('Exame')
      break
    case 2:
    case 1:
    case 0:
      console.log('Reprovado')
      break
    default:
      console.log('Nota inválida')
  }
}

for (let i = -1; i <= 11; i++) {
  printResult(i)
}
