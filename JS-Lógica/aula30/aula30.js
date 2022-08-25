// Mais diferenças entre VAR e LET/CONST
// Let tem escopo de bloco { ...isso é um bloco}
// Var só tem escopo de função

// let nome = 'Vinicius'; // criando a variável
// var nome2 = 'Vinicius';

// var nome2 = 'Otávio';
// console.log(nome, nome2);

// const verdadeira = true;
// if (verdadeira) {
//   let nome = 'Otávio'; // criando a variável

//   if (verdadeira) {
//     let nome = 'Outra coisa'; // redeclarando em um outro escopo de bloco
//   }
// }

console.log('-------------');

// Escopo de função protege o valor da função
var sobrenome = 'Miranda';
function falaOi() {
  var nome = 'Luiz';
  console.log(`Detro da função: ${nome} ${sobrenome}`);
}
falaOi();
