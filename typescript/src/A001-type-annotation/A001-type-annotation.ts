/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
const nome: string = 'Vinicius'; //Qualquer tipo de strings: '' "" ``
const age: number = 23; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
const adult: boolean = true; // Verdadeiro ou falso
const symbol: symbol = Symbol('any-symbol'); // Symbol
// const big: bigint = 10n; // bigint

// Arrays
const numberArray: number[] = [1,2,3];
const stringArray: string[] = ['a', 'b', 'c'];

// Objetos

const pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Vinicius',
  idade: 23,
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}
const result = soma(2,2)

const soma2: (x:number, y:number) => number = (x, y) => x + y
