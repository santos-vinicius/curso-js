// & // and
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC;

const pessoa: Pessoa = {
  idade: 23,
  nome: 'Vinicius',
  sobrenome: 'Santos',
};
console.log(pessoa);

// Module mode
export { pessoa };
