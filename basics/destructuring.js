const pessoa = {
  nome: 'Ana',
  idade: 45,
  bemHumorado: false,
  endereco: {
    logradouro: 'Rua Cônego Siqueira Canabarro',
    numero: 2166
  }
}

const { nome, idade } = pessoa;
console.log(nome);
console.log(idade);

const {nome: n, idade: i} = pessoa
console.log(n, i);

const { sobrenome, bemHumorado = true } = pessoa;
console.log(sobrenome, bemHumorado);

const {endereco} = pessoa;
console.log(endereco);

const {endereco: { logradouro: jorge, numero: pedro} } = pessoa;
console.log(jorge, pedro);