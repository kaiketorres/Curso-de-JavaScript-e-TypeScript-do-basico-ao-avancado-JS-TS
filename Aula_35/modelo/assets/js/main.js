const container = document.getElementById('container')
const divCotainer = document.createElement('div')
container.appendChild(divCotainer)

const elemetos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'},
]

for(let i = 0; i < elemetos.length; i++){
  const texto = document.createElement(elemetos[i].tag)
  divCotainer.appendChild(texto)
  texto.innerHTML = elemetos[i].texto
}
