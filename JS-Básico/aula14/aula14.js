let num1 = 9.54578;
console.log(num1 ** 0.5); // Modo de resultar a raiz quadrada de um número

let num2 = Math.floor(num1);
console.log(num2);
let num3 = Math.ceil(num1);
console.log(num3);
let num4 = Math.round(num1);
console.log(num4);

console.log('-----------');

console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

console.log('-----------');

console.log(Math.random());

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // gera número aleatório entre 5 e 10
console.log(aleatorio);

console.log('-----------');

console.log(100 / 0); // Não gera erro, gera o dado Infinity
