// Factory Functions

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    // getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      console.log(valor);
    },

    fala: function (assunto) {
      return `${this.nome}, está ${assunto}.`;
    },
    altura: altura,
    peso: peso,
    // getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Vinicius', 'Santos', 1.8, 65);
console.log(p1);
p1.nomeCompleto = 'Luiz Otávio Miranda';
console.log(p1.nomeCompleto);
console.log(p1.fala('estudando sobre JS'));
console.log(p1.imc);
