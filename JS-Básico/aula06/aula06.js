/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.8 de altura e seu IMC é de 
Luiz Otávio nasceu em 1980
*/

const nome = 'Vinicius';
const sobrenome = 'Santos';
let idade = 23;
let peso = 65;
const altura = 1.87; // em metros
let indiceMassaCorporal = peso / (altura * altura);
let anoNascimento = 2022 - idade;

console.log(
  `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} metros de altura e seu IMC é de ${indiceMassaCorporal}.`
);
console.log(`${nome} ${sobrenome} nasceu no ano de ${anoNascimento}.`);
