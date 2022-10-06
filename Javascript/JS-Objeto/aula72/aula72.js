// Métodos úteis para objetos

/*
Object.values
Object.entries
Object.assign (des, any)
Object.getOwnPropertyDescriptor (o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisa = Object.assign({}, produto, { material: 'vidro' });

outraCoisa.nome = 'Copo';
outraCoisa.preco = 2.5;
console.log(Object.keys(produto));
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

console.log(produto, outraCoisa);
