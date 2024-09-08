// const horas = 50

// if( horas >= 0 && horas <= 11){
//   console.log('Bom Dia')
// } else if(horas >= 12 && horas < 18){
//   console.log('Boa tarde')  
// } else if( horas >= 18 && horas <= 23) {
//   console.log('Boa noite')
// } else{
//   console.log('Essa horas e invalida')
// }

const tenhoGrana = false

if (tenhoGrana){
  console.log('Vou sair de casa')
} else {
  console.log('Nao vou sair de casa')
}

{tenhoGrana ? console.log('Vou sair de casa') : console.log('Nao vou sair de casa') }

switch(tenhoGrana){
  case true: console.log('Vou sair de casa')
  break
  case !true: console.log('Nao vou sair de casa')
}