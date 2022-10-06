// Parâmetros da função

// arguments: sustenta todos os argumentos enviados
function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}
funcao(1, 2, 3, 4, 5);

function objeto({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
objeto({ nome: 'Vinicius', sobrenome: 'Santos', idade: 23 });

function array([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}

array(['Vinicius', 'Santos', 30]);

function conta(operador, acumulador, ...numeros) {
  for (let numero in numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador);
}

conta('+', 1, 20, 30, 40, 50);
