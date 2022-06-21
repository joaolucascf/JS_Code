/*variáveis declaradas com let tem maior precisão de escopo
sendo visíveis e manipuláveis apenas dentro do bloco em que são declaradas*/
let numero = 1;
{
  let numero = 2;
  console.log("dentro =", numero);
}
console.log("fora =", numero);