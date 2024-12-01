const inputValue = document.querySelector('input').value
const adicionarTarefa = document.querySelector('.adicionarTarefa')
const result = document.querySelector('.result')

adicionarTarefa.addEventListener('click', () => {
  
  result.innerHTML += `<p> ${inputValue} <button onclick="teste()" >Apagar</button></p>`
} ) 

const teste = () => {
  result.innerHTML += result.remove()
}