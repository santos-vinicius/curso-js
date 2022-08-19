// Objeto Date
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// - O objeto date é uma função construtora

// const dataZero = new Date(0); // 01/01/1970 - Timestamp unix ou época unix (data zero)

const tresHoras = 60 * 60 * 3 * 1000; // Sempre lembrar do timezone que influencia na exibição das horas
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
console.log(data.toString());

console.log('------------');

const data2 = new Date('2019-04-20 20:30:20');
console.log('Dia', data2.getDate());
console.log('Mês', data2.getMonth()); // os meses em JS começam do 0
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Minuto', data2.getMinutes());
console.log('Segundos', data2.getSeconds());
console.log('Milésimo de Segundo', data2.getMilliseconds());
console.log('Dia da Semana', data2.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data2.toString());

console.log('------------');

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data3) {
  const dia = zeroAEsquerda(data3.getDate());
  const mes = zeroAEsquerda(data3.getMonth() + 1);
  const ano = zeroAEsquerda(data3.getFullYear());
  const hora = zeroAEsquerda(data3.getHours());
  const min = zeroAEsquerda(data3.getMinutes());
  const seg = zeroAEsquerda(data3.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data3 = new Date();
const dataBrasil = formataData(data3);
console.log(dataBrasil);
