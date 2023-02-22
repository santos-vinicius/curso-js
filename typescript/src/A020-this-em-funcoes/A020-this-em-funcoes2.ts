export function funcao(this: Date, nome: string, idade: number): void {
  console.log(this);
  console.log(nome);
  console.log(idade);
}

funcao.call(new Date(), 'Vinicius', 23);
funcao.apply(new Date(), ['Vinicius', 23]);
