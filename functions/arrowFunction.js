let dobro = function (a) {
  return 2 * a
} //função normal

dobro = a => {
  return 2 * a
}

dobro = a => 2 * a

console.log(dobro(2))

let ola = function () {
  return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'

console.log(ola())
