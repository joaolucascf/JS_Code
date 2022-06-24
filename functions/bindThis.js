const pessoa = {
  greet: 'Opa, tudo bom??',
  say() {
    console.log(this.greet);
  }
}

pessoa.say();
const sayAgain = pessoa.say;
sayAgain(); //gera string undefined por que o this da função passa a ser 'sayAgain' e não 'pessoa'
const sayOneMoreTime = pessoa.say.bind(pessoa); //bind 'prende' o this do objeto passado como argumento
sayOneMoreTime()

