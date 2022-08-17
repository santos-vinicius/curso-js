// Arrays (básico)
//               0       1        2       3
const alunos = ['Luiz', 'Maria', 'João', 'Carla'];
alunos[0] = 'Eduarda';
alunos[4] = 'Luiza';

// Saber o tamanho do array
console.log(alunos.length);

// Adicionar item no final do array
alunos.push('Fábio');

// Adicionar item no inicio do array
alunos.unshift('Rosa');
alunos.unshift('Thiago');

// Remover elementos do final do array
alunos.pop();

// Remover elementos do começo do array
alunos.shift();

// Acessar indice que não existe
console.log(alunos[50]); // retorna undefined

console.log(alunos);
console.log(typeof alunos);
console.log(alunos instanceof Array);
