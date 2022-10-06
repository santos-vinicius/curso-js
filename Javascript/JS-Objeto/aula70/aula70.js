// definePropety - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: false, // mostra a chave?
    value: estoque, // valor da chave?
    writable: false, // valor pode ser alterado?
    configurable: true // pode reconfigurar a chave?
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1));
