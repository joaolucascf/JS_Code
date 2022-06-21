const print = function (text_) {
  console.log(text_)
}

const obj = {
  say: function (name) {
    console.log(`Meu nome é ${name}`)
  }
}
const array = [print, 1, true, 7.4, false, 'Jorge', obj]

console.log(typeof array[0])
console.log(typeof array[1])
console.log(typeof array[2])
console.log(typeof array[3])
console.log(typeof array[4])
console.log(typeof array[5])
console.log(typeof array[6])

array[0]('Marcos')
array[0](array[5])
array[6].say(array[5])
