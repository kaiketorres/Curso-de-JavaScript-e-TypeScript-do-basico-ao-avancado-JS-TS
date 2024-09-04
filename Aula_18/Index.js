/* const criaPessoa = (nome, sobrenome, idade) => {
  return {
    nome, sobrenome, idade
  }
}

const pessoa_01 = criaPessoa('Claudenor','Pereira da silva',50)

const pessoa_02 = criaPessoa('Tatiana','Torres de sousa',40)

const pessoa_03 = criaPessoa('Thainara','Torres da silva',25)

const pessoa_04 = criaPessoa('Kaike','Torres da silva',20)

const pessoa_05 = criaPessoa('Yasmim','Lauanda Torres da silva',18)


console.log(pessoa_01, pessoa_02, pessoa_03, pessoa_04, pessoa_05)
*/


const pessoa1 = {
  nome: ['luiz', 'kaike','yasmim'],
  sobrenome: 'Miranda',
  idade: 25,
  
  falar(){
    console.log(`${this.nome[1]} ${this.sobrenome} esta falando oi ${this.idade}`)
  },
  
  incrementaIdade(){
    this.idade++
  }
}

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
pessoa1.falar() 
pessoa1.incrementaIdade()
pessoa1.falar() 
pessoa1.incrementaIdade()
pessoa1.falar() 
pessoa1.incrementaIdade()
pessoa1.falar() 