const data = new Date()
const diaSemana = data.getDay()



function getDiaSemanaTexto(diaSemana) {

  let diaSemanaTexto
  

  switch (diaSemana) {
    case 0: diaSemanaTexto = 'Domingo'
      return diaSemanaTexto;
    case 1: diaSemanaTexto = 'Segunda'
      return diaSemanaTexto;
    case 2: diaSemanaTexto = 'Terca'
      return diaSemanaTexto;
    case 3: diaSemanaTexto = 'Sexta'
      return diaSemanaTexto;
    case 4: diaSemanaTexto = 'Quinta'
      return diaSemanaTexto;
    case 5: diaSemanaTexto = 'Sexta'
      return diaSemanaTexto;
    case 6: diaSemanaTexto = 'Sabado'
  }

  return diaSemanaTexto
}

const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(`hoje e ${diaSemanaTexto} e dia ${diaSemana}`)

/*
if (diaSemana === 0){
  diaSemanaTexto = 'Domingo'
} else if(diaSemana === 1){
  diaSemanaTexto = 'Segunda'
} else if(diaSemana === 2){
  diaSemanaTexto = 'terca'
} else if(diaSemana === 3){
  diaSemanaTexto = 'Quarta'
} else if(diaSemana === 4){
  diaSemanaTexto = 'Quinta'
} else if(diaSemana === 5){
  diaSemanaTexto = 'Sexta'
} else{
  diaSemanaTexto = 'Sabado'
}
*/

