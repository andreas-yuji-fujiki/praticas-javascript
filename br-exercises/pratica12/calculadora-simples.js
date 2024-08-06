function parOuImpar(n){
    if(n % 2 == 0){
        return `O número ${n} é Par!`
    }else{
        return `O número ${n} é Impar!`
    }
}
let resultadoParOuImpar = parOuImpar(11)
console.log(resultadoParOuImpar)

function calcular(n1, operador, n2){
    if(operador == '+'){
        return `Resultado da soma entre ${n1} e ${n2} é ${n1+n2}!`
    }else if(operador == '-'){
        return `Resultado da subtração entre ${n1} e ${n2} é ${n1-n2}!`
    }else if(operador == '*'){
        return `Resultado da multiplicação entre ${n1} e ${n2} é ${n1*n2}!`
    }else if(operador == '/'){
        return `Resultado da divisão entre ${n1} e ${n2} é ${n1/n2}!`
    }else if(operador == '%'){
        return `Resultado da sobra da divisão entre ${n1} e ${n2} é ${n1%n2}!`
    }else if(operador == '**'){
        return `Resultado da potência entre ${n1} e ${n2} é ${n1**n2}!`
    }else{
        return `Operador ${operador} inválido!` 
    }
}
let resultadoCalculo = calcular(6, '+', 1)
console.log(resultadoCalculo)

function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log('Fatorial:')
console.log(fatorial(5))

let soma = function(n1=0, n2=0){
    return n1+n2
}
console.log('Somando:')
console.log(soma(5,4))