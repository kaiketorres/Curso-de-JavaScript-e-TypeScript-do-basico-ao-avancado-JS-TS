const pessoa = {
  nome: ['luis','kaike'],
  sobrenome: 'miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  },
}

const { nome, ...resto } = pessoa

console.log(resto)
