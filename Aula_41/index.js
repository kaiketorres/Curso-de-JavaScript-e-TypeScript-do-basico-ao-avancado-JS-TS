//Escreva uma funcai que receba 2 numeros e retorne o maior deles

function NumeroMaior01( n1, n2 ){
   
   if(n1 > n2){
      return n1
   }else{
      return n2
   }

}

const NumeroMaior02 = (n1, n2) => {
   return n1 > n2 ? n1 : n2
}

console.log(NumeroMaior01(3, 4))

console.log(NumeroMaior02(3, 4))
