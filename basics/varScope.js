/*variáveis declaradas com var geralmente 
são utilizadas para escopo global, em JS,
como não existe função main, todas as variáveis 
que não estão dentro do escopo de uma função são globais*/

{
  {
    {
      {
        var wordTest = 'WHAT???'
        console.log(wordTest);
      }
    }
  }
}
console.log(wordTest);//é acessada fora do bloco também

/*variáveis declaradas com var não tem precisão de escopo, e blocos de código
 sem comandos apenas com variáveis e sentenças comuns são acessadas de qualquer lugar do código,
 isso gera imprecisão, já que por acidente podemos acabar acessando a mesma váriavel e trocar algum
 valor importante para o funcionamento da aplicação*/
//mais um exemplo da falta de precisão de escopo

var testeValor = 1;
  {
    var testeValor = 2;
    console.log("dentro =",testeValor);
  } 
console.log("fora =",testeValor); // vai imprimir o mesmo valor que foi associado a variável por último, mesmo não sendo do mesmo escopo

const fWordTest = (word) => {
  word = 'aaa';
}

fWordTest('jorge');
console.log(word);//a variável não pode ser acessada, pois é argumento de uma função, logo após a função ser executada ela é destruída

function teste() {
  var word = 'teste';
}

teste();
console.log(word); // novamente, a variável não pode ser acessada pois foi declarada dentro de uma função, logo após a função ser executada ela é destruída