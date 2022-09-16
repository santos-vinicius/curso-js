// IIFE -> Immediately invoked function expression
function fugindoDoGlobal() {
  console.log('Olá, ainda toco no escopo global!');
}
fugindoDoGlobal();

(function () {
  console.log('Estou fora do escopo global e sou auto invocada!');
})();
