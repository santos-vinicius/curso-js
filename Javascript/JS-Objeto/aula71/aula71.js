function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, 'estoque', {
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== 'number') {
        console.log('Invalid value :(');
        return;
      }
      estoquePrivado = valor;
    },
    enumerable: true,
    configurable: true
  });
}

const p1 = new Produto('Camiseta Preta', 25, 3);
console.log(p1);
p1.estoque = 'O valor que eu quero!';
console.log(p1.estoque);
