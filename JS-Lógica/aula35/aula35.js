// For in -> Lê os índices de um vetor ou chaves do objeto

const frutas = ['Pêra', 'Uva', 'Maça'];

for (let index in frutas) {
  console.log(frutas[index]);
}

console.log('/---------------------------/');

const pessoa = {
  nome: 'Vinicius',
  sobrenome: 'Santos',
  idade: 23
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }
