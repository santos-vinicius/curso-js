// closures

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao('Vinicius');
const funcao2 = retornaFuncao('Carlos');

console.log(funcao);
console.log(funcao2);
console.log(funcao(), funcao2());
