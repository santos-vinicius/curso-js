// Operador ternário ? e :
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1000;
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // Setando valor padrão (Fallback)

console.log(nivelUsuario, corPadrao);
