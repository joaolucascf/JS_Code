let trabalho = [true, true]

for (let i = 0; i < 4; i++) {
  if (i === 1) trabalho = [true, false]
  if (i === 2) trabalho = [false, true]
  if (i === 3) trabalho = [false, false]
  if ((trabalho[0] && trabalho[1]) === true) {
    console.log('Os dois trabalhos deram certo!!')
    continue
  }
  if ((trabalho[0] || trabalho[1]) === true) {
    if (trabalho[0] === true) console.log('O primeiro trabalho deu certo!!')
    if (trabalho[1] === true) console.log('O segundo trabalho deu certo!!')
    continue
  }
  console.log('Nenhum trabalho deu certo :(')
}
