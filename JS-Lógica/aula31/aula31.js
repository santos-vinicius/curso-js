// Atribuição via desestruturação (Arrays)
// operador ...(rest/spread)

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, , tres, , cinco, , sete] = numeros;

console.log(um, tres, cinco, sete);
