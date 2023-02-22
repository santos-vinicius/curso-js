export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000.00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Vinicius', 'Santos', 23, '000.000.000-00');
const pessoa2 = Pessoa.criaPessoa('Gustavo', 'Morais');
console.log(pessoa);
console.log('--------');
console.log(pessoa2);
pessoa.metodoNormal();

console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
