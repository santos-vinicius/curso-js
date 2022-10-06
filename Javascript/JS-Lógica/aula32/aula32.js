const pessoa = {
  nome: 'Vinicius',
  sobrenome: 'Santos',
  idade: 23,
  endereco: {
    rua: 'Pereira Barreto',
    numero: 144
  }
};
const {
  nome,
  sobrenome,
  idade,
  endereco: { rua, numero }
} = pessoa; // Atribuição via desestruturação
console.log(nome, sobrenome, idade, rua, numero);
