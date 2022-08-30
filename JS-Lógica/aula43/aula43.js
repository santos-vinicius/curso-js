// Tratando e lançando erros (try, catch e throw)

// const err = 'Ocorreu um erro. Por favor tente novamente!';

// try {
//   console.log(naoExisto);
// } catch (erro) {
//   // console.log('naoExisto não existe.');
//   console.log(err);
// }

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser números');
  }

  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma(1, '2'));
} catch (error) {
  console.log('Alguma coisa mais amigável pro usuário.');
}
