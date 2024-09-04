let num = Number(prompt('Digite um numero:'))

window.document.body.innerHTML = `<h1>Seu numero e ${num}</h1>`

window.document.body.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(num)}</p>`

window.document.body.innerHTML += `<p>${num} e inteiro? ${Number.isInteger(num)} </p>`

window.document.body.innerHTML += `<p>Arredondando para baixo ${Math.ceil(num)}</p>`

window.document.body.innerHTML += `<p>Arredondando para cima ${Math.floor(num)}</p>`

window.document.body.innerHTML += `<p>Com duas casas decimais ${num.toFixed(2)}</p>`

window.