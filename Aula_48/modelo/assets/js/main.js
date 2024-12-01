
const getTimerFromSeconds = (segundos) => {
   const data = new Date(segundos * 1000)
   return data.toLocaleTimeString('pt-BR', {
    hour12:false,
    timeZone: 'GMT'
   })
}

console.log(getTimerFromSeconds(10))

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer;

const iniciaRelogio = () => {
  timer = setInterval( function() {
    segundos++
    relogio.innerHTML = getTimerFromSeconds(segundos);
  }, 1000)
}

iniciar.addEventListener('click', () => {
  iniciaRelogio()
})

pausar.addEventListener('click', () => {
  clearInterval(timer)
})

zerar.addEventListener('click', () => {
  clearInterval(timer)
  relogio.innerHTML = '00-00-00'
})