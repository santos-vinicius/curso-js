// Tipo UNKOWN é um ANY mais 'seguro' pois ele exige checagem de tipo.
let x: unknown;

x = 100;
x = 'Luiz';
x = '10';
x = 11;
const y = 800;

if (typeof x === 'number') console.log(x + y);
