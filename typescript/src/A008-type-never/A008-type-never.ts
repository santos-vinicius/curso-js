// Never geralmente lança erro ou cria loops infinitos

export function criaErro(): never {
  throw new Error('Um erro qualquer');
}

criaErro();
