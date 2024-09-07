/*Primitivos (imutaveis) - string, number, boolean, undefined, 
  null (bigint, sybol) - Valor
*/
 
/*let a = 'A'
let b = a

console.log(a, b)
a = 'Outra coisa'
console.log(a, b)
*/

/* Referencia (mutavel)  - array, object, function - Passados por referencia*/

/*let a = [1, 2, 3]
let b = [...a]
let c = b

console.log(a, b)

a.push(4)

console.log(a, b)

b.pop()
console.log(a, b)
a.push('Luiz')
console.log(c)
*/

const a = {
  nome: 'Luiz',
  sobrenome: 'Otavio'
}

const b = {...a}
a.nome = 'kaike'

console.log(a, b)
