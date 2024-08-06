let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor tem esses valores: ${num}`)
console.log(`Nosso vetor tem essa quantia de valores: ${num.length}`)
console.log(`Esse é o nosso vetor ordenado: ${num.sort()}`)
num.push(1)
num.push(4)
num.push(6)
num.push(7)
num.sort()
console.log(`Agora eu adicionei mais números e organizei novamente: ${num}`)
console.log(`E por fim, agora ele tem essa quantia de valores: ${num.length}`)
console.log('Agora vamos ver cada posição:')
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}