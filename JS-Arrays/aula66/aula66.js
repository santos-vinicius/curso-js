// Reduce ->

// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(total);

const pares = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(pares);
