// Factory functions + Prototypes

const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  }
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  }
};

const pessoaPrototype = { ...falar, ...comer, ...beber };

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Vinicius', 'Santos');
const p2 = criaPessoa('Maria', 'Teste');
console.log(p1);
console.log(p2);
