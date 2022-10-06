// Revisão de Objetos
const pessoa1 = {
  nome: 'Vinicius',
  sobrenome: 'Santos',
  idade: 23,
  falarNome() {
    return `${this.nome} está falando seu nome.`;
  },
  getDataNascimento() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
  }
};

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
  console.log(chave);
}

// factory functions

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa('Vinicius', 'Santos');
console.log(p1.nomeCompleto());

// constructor function

function Pessoa(nome, sobrenome) {
  (this.nome = nome), (this.sobrenome = sobrenome);
}
const p2 = new Pessoa('Vinicius', 'Santos');
console.log(p2);

// para evitar alterações em um objeto você pode usar o métedo: Object.freeze(nome do que deseja "travar")
