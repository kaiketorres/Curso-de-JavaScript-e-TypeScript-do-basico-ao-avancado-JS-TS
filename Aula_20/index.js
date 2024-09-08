
const usuarios = []

document.getElementById('meuFormulario').addEventListener('submit', function (event) {

  event.preventDefault()

  const nomeUser = document.getElementById('nome').value
  const sobrenomeUser = document.getElementById('sobrenome').value
  const pesoUser = document.getElementById('peso').value
  const alturaUser = document.getElementById('altura').value
  const resultado = document.getElementById('resultado')

  resultado.innerHTML += (`<p> <strong>Nome:</strong> ${nomeUser} <strong>Sobrenome:</strong> ${sobrenomeUser} <strong>Peso:</strong> ${pesoUser} <strong>Altura:</strong> ${alturaUser} </p> <br>`)

  adicionarUser(nomeUser, sobrenomeUser, pesoUser, alturaUser)

}
)

const adicionarUser = (nomeUser, sobrenomeUser, pesoUser, alturaUser) => {

  const usuario = {
    nome: nomeUser,
    sobrenome: sobrenomeUser,
    peso: pesoUser,
    altura: alturaUser
  }

  usuarios.push(usuario)
  console.log(usuarios)
}





