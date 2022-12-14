// Métodos úteis para promisses
// Promise.all / Promise.race / Promise.resolve / Promise.reject

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(false);
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise!');
      return;
    }, tempo);
  });
}

// ---------------------------------------- //

function baixaPagina() {
  const emCache = true;
  if (emCache) {
    return Promise.resolve('Página em cache.');
  } else {
    return esperaAi('Baixei a página', 2000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log('ERRO', e));

// ---------------------------------------- //

const promises = [
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 1', 1000)
  // esperaAi(1000, 1000),
];

Promise.race(promises)
  .then(values => {
    console.log(values);
  })
  .catch(error => {
    console.log(error);
  });
