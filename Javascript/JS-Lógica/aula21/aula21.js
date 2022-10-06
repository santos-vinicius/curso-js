/* 
Operadores Lógicos 
&& -> and -> E - Todas as expressões precisam ser verdadeiras pra retornar true
|| -> or -> OU - Se uma das expressão retornar verdeiro então retorna true. Apenas se todas retornarem false que a expressão completa retornará false 
! -> not -> NÃO - inverte uma expressão
*/

console.log('exemplo AND');
console.log(true && true); // true
console.log(true && false); // false

console.log('-------------');
console.log('exemplo OR');
const expressaoOr = false || true;
console.log(expressaoOr);

console.log('-------------');
console.log('exemplo NOT ');
console.log(!false);
