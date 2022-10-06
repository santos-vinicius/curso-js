// Objeto Map()

const pessoas = [
  { id: 3, nome: 'Helena' },
  { id: 2, nome: 'Eduardo' },
  { id: 1, nome: 'Vinicius' }
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

for (const [identifier, { id, nome }] of novasPessoas) {
  console.log(identifier, id, nome);
}
