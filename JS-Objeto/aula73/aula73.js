// Prototypes

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
};

// instância
const p1 = new Pessoa('Vinicius', 'S.'); // <- Pessoa =  Função construtora
const p2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora

console.dir(p1);
console.dir(p2);
