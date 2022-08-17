// Funções
function saudacao(nome) {
  return `Boa noite ${nome}!`;
}

const variavel = saudacao('Vinicius');
console.log(variavel);

function soma(x = 1, y = 1) {
  const resultado = x + y;
  return resultado;
}

const resultado = soma(5, 5);
console.log(resultado);

const raiz = function (n) {
  // const raiz = (n) => { } // -> Arrow function!
  return n ** 0.5;
};

console.log('-----------');
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
