const idade = 17
let hoje = new Date()

console.log(`Você precisa votar com ${idade} anos de idade?`)
if(idade < 16){
    console.log('Não precisa votar!')
}else if(idade <= 18 || idade >= 65){
    console.log('Voto opcional!')
}else{
    console.log('Voto obrigatório!')
}

console.log('Quais as condições do dia de hoje?')
console.log(`Ano atual: ${hoje.getFullYear()}`)
console.log(`Mês atual: ${hoje.toLocaleString('pt-br', { month: 'long' })}, ${hoje.getMonth() + 1}`);
console.log(`Dia atual: ${hoje.getDate()}`)
switch (hoje.getDay()){
    case 0:
        console.log('Dia da semana: Domingo')
        break
    case 1:
        console.log('Dia da semana: Segunda')
        break
    case 2:
        console.log('Dia da semana: Terça')
        break
    case 3:
        console.log('Dia da semana: Quarta')
        break
    case 4:
        console.log('Dia da semana: Quinta')
        break
    case 5:
        console.log('Dia da semana: Sexta')
        break
    case 6:
        console.log('Dia da semana: Sabado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}
console.log(`Hora atual: ${hoje.getHours()}`)
console.log(`Minutos atuais: ${hoje.getMinutes()}`)
console.log(`Segundos atuais: ${hoje.getSeconds()}`)