let num = [8,6,7,5,4]
num.sort()
/*for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}*/
for(let pos in num){
    console.log(num[pos])
}
let pos = num.indexOf(7)

if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor foi encontrado na posição ${pos}`)
}


let informacoes = [nome = 'Andreas', sobrenome = 'Pinheiro', idade = '16']
console.log(`${nome} ${sobrenome} tem ${idade} anos.`)