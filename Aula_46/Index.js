const mostraHora = () => {
  let data = new Date();
  
  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}



const Timer = setInterval(function (){
  console.log(mostraHora())
}, 1000)

//exexuta uma vez

setTimeout(function() {
  clearInterval(Timer)
  console.log('ola')
}, 5000)

