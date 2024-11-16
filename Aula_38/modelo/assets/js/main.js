const paragrafos = document.querySelector('.paragrafos'); 
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor

for(let p of ps){
  console.log(ps)
  p.style.marginTop = '10px'
  p.style.color = 'white'
  p.style.backgroundColor = backgroundColorBody
}

