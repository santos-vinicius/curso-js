export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  geCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }

  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    const result = super.getNomeCompleto();
    return result + ' HEEEEEY! ';
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do Cliente ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Vinicius', 'Santos', 23, '490.965.638-32');
const aluno = new Aluno('Vinicius', 'Santos', 23, '490.965.638-32', '0001');
const cliente = new Cliente('Vinicius', 'Santos', 23, '490.965.638-32');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log('------------');
console.log(aluno);
