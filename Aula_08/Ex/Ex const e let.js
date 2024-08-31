const nome = 'kaike'
const sobreNome = 'torres'
let idade = 20
let peso =  80
let altura = 1.70

let imc = (peso / (altura * altura)).toFixed(1)

console.log(nome + ' ' + sobreNome +' tem ' + idade + ' anos, pesa ' + peso + 'kg e tem ' + altura + ' de altura e seu IMC e de ' + imc)

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso}kg e tem ${altura} de altura e seu IMC e de ${imc}`)