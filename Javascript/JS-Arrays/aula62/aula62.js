const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elementos para adicionar separados por virgula)

const removidos = nomes.splice(3, 3, 'Luiz', 'Otávio');
console.log(nomes, removidos);
