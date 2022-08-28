// Aula 34 - Exercícios com for

const elementos = [
  { tag: 'p', texto: 'Isso é um P' },
  { tag: 'div', texto: 'Isso é uma DIV' },
  { tag: 'footer', texto: 'Isso é um FOOTER' },
  { tag: 'section', texto: 'Isso é uma SECTION' }
];

const container = document.querySelector('.container');
const div = document.createElement(div);

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerHTML = texto;
  div.appendChild(tagCriada);
}

container.appendChild(div);
