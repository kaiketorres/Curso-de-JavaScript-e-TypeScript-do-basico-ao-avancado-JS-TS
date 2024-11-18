const fizzBuzz = (n) => {

   if(n){

    if(n % 3 && n % 5) return 'fizzBuzz'  
    if(n % 3) return 'Fizz'   
    if(n % 5) return 'buzz'  

   }

}
  

for(let i = 0; i < 100; i++){
   console.log(i,fizzBuzz(i))  
}