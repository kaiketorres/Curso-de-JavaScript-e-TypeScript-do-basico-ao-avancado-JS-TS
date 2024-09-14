document.getElementById('submit').addEventListener('click', () => {

  let resultado = document.getElementById('resultado')
  let peso = document.getElementById('peso').value
  let altura = document.getElementById('altura').value

  let resultadoIMC = calcIMC(peso, altura)

  let regrasTable = regras(resultadoIMC)

  escrever(resultado, peso, altura, resultadoIMC, regrasTable )
})


let calcIMC = (peso, altura) => {

  let conta = (peso / (altura * altura)).toFixed(2)

  return conta

}

let regras = (resultadoIMC) => {

  if (resultadoIMC < 18.5) {
    return 'Abaixo do peso'
  } else if (resultadoIMC > 18.5 && resultadoIMC <= 24.9) {
    return 'Peso normal'
  } else if (resultadoIMC >= 25 && resultadoIMC < 29.9) {
    return 'Sobrepeso'
  } else if (resultadoIMC >= 30 && resultadoIMC < 34.9) {
    return 'Obesidade grau 1'
  } else if (resultadoIMC >= 35 && resultadoIMC < 39.9) {
    return 'Obesidade grau 2'
  }
  else if (resultadoIMC >= 40) {
    return 'Obesidade grau 3'
  }
}

let escrever = (resultado, peso, altura, resultadoIMC, regrasTable) => {
  
  if (peso === '') {
    resultado.style.display = 'block'
    resultado.style.backgroundColor = 'red'
    resultado.innerHTML = 'Peso invalido'
  } else if (altura === '') {
    resultado.style.display = 'block'
    resultado.style.backgroundColor = 'red'
    resultado.innerHTML = 'Altura invalido'
  } else {
    resultado.style.display = 'block'
    resultado.style.backgroundColor = 'rgb(29, 221, 29)'
    resultado.innerHTML = `Seu imc e ${resultadoIMC} (${regrasTable})`
  }
}

