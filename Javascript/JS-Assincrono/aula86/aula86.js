// Promisses

function numeroAleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(new Error('ERRO'));

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('Frase 1', numeroAleatorio(1, 3))
  .then(response => {
    console.log(response);
    return esperaAi('Frase 2', numeroAleatorio(1, 3));
  })
  .then(response => {
    console.log(response);
    return esperaAi(2222, numeroAleatorio(1, 3));
  })
  .then(response => {
    console.log(response);
  })
  .then(() => {
    console.log('Eu serei o último a ser exibido.');
  })
  .catch(e => {
    console.log('ERRO', e);
  });
