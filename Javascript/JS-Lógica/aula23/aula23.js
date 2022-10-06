// if, else if e else (se, senão se e senão)
/*
- if pode ser usado sozinho
- sempre que utilizo a palavra else, preciso de um if
- posso ter vários else if na checagem  
- podemos usar condiçoes sem o else if, somente o else 
*/

// EXEMPLO:

/*
Entre 0 - 11 = Bom dia!
Entre 12 - 17 = Boa tarde!
Entre 18 - 23 = Boa noite! 
*/

const hora = 60;

if (hora >= 0 && hora <= 11) {
  console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
  console.log('Boa noite!');
} else {
  console.log('Olá!');
}
