function random(min, max){

const r = Math.random() * (max - min) + min

return r
}

let rand = random(1, 50)
console.log(rand)