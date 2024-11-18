// Escreva uma funcao chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number) retorne true se a imagem estiver no modo paisagem

const ePaisagem = (l, a) => {

   return l > a ? 
   'A imagem esta no modo paisagem' : 'A imagem nao esta no modo paisagem'
}

console.log(ePaisagem(1980, 720))
