// Conceitos básicos de Objeto

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
    // ou
    /**
     * return { nome, sobrenome, idade }
     * não precisa repetir a escrita quando os valores
     * são iguais.
     **/
  };
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Silva', 30);
const pessoa3 = criaPessoa('João', 'Oliveria', 45);
const pessoa4 = criaPessoa('Matheus', 'Otá', 15);
const pessoa5 = criaPessoa('Lara', 'Santos', 20);

console.log(pessoa1.nome, pessoa2.nome);

// Exemplo de uso do THIS

const pessoa6 = {
  nome: 'Vinicius',
  sobrenome: 'Santos',
  idade: 22,

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`);
  },

  incrementaIdade() {
    this.idade++;
  }
};

pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
