/*
Operadores Logicos

&& -> AND -> E -> Todas as expressoes precisam ser verdadeiras para retormar true

|| -> OR -> OU
*/

/*
const expressaoAND = true && true && true
const expressaoOr = false || false || false || false
console.log(expressaoAND) 
*/

const usuario = 'Kaike' //form usuario digitou
const senha = '123456'  //form usuario digitou

const vaiLogar = usuario === 'Kaike' && senha === '123456'
//const vaiLogar = usuario === 'Kaike' || senha === '12345'


console.log(vaiLogar)