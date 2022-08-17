// Avaliação de Curto-Circuito
/*
 && -> false && true -> false "o valor mesmo"
 || -> true && false -> vai retornar o "o valor verdadeiro"
 */

// Valores que podem ser ser avaliados em falso
/*
  false (literal)
  0
  "" '' ``
  null / undefined
  NaN
*/

// exemplos AND:

console.log('Luiz Otávio' && true && NaN);
console.log('-----------------');

function falaOi() {
  return 'Oi';
}

let vaiExecutar = false;
console.log(vaiExecutar && falaOi());

console.log('-----------------');
// exemplos OR

console.log(0 || false || null || 'Luiz Otávio' || true); // retorna o primeiro valor verdadeiro encontrado.

console.log('-----------------');
const corUsuario = null;
const corPadrao = corUsuario || 'red';

console.log(corPadrao);
