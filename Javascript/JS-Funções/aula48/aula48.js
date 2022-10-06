// Maneiras de declarar funções

// First-class objects (Podem ser tratadas como dado)
// Function expression ->
const souUmDado = function () {
  console.log('Sou um dado.');
};

// Declaração literal (Function hoisting)
// falaOi() // hoisting
function falaOi() {
  console.log('Oi');
}
falaOi();

function executaFuncao(funcao) {
  console.log('Vou executar sua função abaixo:');
  funcao();
}
executaFuncao(souUmDado);

// Arrow function

const arrowFunction = () => {
  console.log('Sou uma arrow function');
};
arrowFunction();

// Dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando...');
  }
};
obj.falar();
