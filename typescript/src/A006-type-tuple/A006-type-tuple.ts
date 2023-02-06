// Tuple
const clientData1: readonly [number, string] = [1, 'Vinicius'];
const clientData2: [number, string, string] = [2, 'Vinicius', 'Santos'];
const clientData3: [number, string, string?] = [3, 'Vinicius'];
const clientData4: [number, string, ...string[]] = [4, 'Vinicius', 'Santos'];

// clientData1[0] = 100;
clientData2[1] = 'Marcus';

console.log(clientData1);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);

// Readonly array

const array1: readonly string[] = ['Vinicius', 'Santos'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];

console.log(array1);
console.log(array2);
