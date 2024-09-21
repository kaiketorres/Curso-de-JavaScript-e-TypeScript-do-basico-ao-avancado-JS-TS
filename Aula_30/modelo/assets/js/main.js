const container = document.getElementById('container')

let dia = new Date().getDay()
let mes = new Date().getMonth()
let ano = new Date().getFullYear()
let horas = (new Date().getHours()).toFixed(2)

let diaTexto;
let mesTexto;

switch (dia) {
  case 0: diaTexto = 'Domingo'
    break
  case 1: diaTexto = 'Segunda-feira'
    break
  case 2: diaTexto = 'Terca-feira'
    break
  case 3: diaTexto = 'Quarta-feira'
    break
  case 4: diaTexto = 'Quinta-feira'
  break
  case 5: diaTexto = 'Sexta-feira'
  break
  case 6: diaTexto = 'Sabado'
}

switch (mes) {
  case 0: mesTexto = 'Janeiro'
    break
  case 1: mesTexto = 'Fevereiro'
    break
  case 2: mesTexto = 'Março'
    break
  case 3: mesTexto = 'Abril'
    break
  case 4: mesTexto = 'Maio'
  break
  case 5: mesTexto = 'Junho'
  break
  case 6: mesTexto = 'Julho'
  break
  case 7: mesTexto = 'Agosto'
  break
  case 8: mesTexto = 'Setembro'
  break
  case 9: mesTexto = 'Outubro'
  break
  case 10: mesTexto = 'Novembro'
  break
  case 11: mesTexto = 'Dezembro'
}

container.innerHTML = `<h1>${diaTexto}, ${dia} de ${mesTexto} ${horas}</h1>`