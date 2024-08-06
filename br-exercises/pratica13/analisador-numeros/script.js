// Variáveis globais:
let valoresAdicionados = []
const displayListaValores = document.getElementById('listaValores')

// Função de criar mensagem:
function criarItem(mensagem){
    let item = document.createElement('li')
    item.innerHTML = mensagem
    displayListaValores.appendChild(item)
}

// Função de adicionar valores:
function adicionar(){
    const valorDigitado = Number(document.getElementById('numerosTxt').value)

    if(!valorDigitado || valorDigitado == 0){
        alert('[ERRO] Digite um valor válido!')
    }else if(valorDigitado > 100){
        alert('[ERRO] O valor não pode ser maior que 100!')
    }else if(valoresAdicionados.includes(valorDigitado)){
        alert(`[ERRO] O valor ${valorDigitado} já foi adicionado!`)
    }else{
        valoresAdicionados.push(valorDigitado)
        criarItem(`Valor ${valorDigitado} adicionado.`)
    }
    valorDigitado = ''
    valorDigitado.focus()
}

// Função de analisar valores:
function analisar(){
    if(!valoresAdicionados || valoresAdicionados == 0){
        alert('[ERRO] Adicione valores antes de finalizar!')
    }else{
        displayListaValores.innerHTML = ''

        criarItem(`<strong>Foram digitados:</strong> ${valoresAdicionados.length} valores.`)
        criarItem(`<strong>Os valores são:</strong> ${valoresAdicionados}!`)

        valoresAdicionados.sort()

        criarItem(`<strong>Organizados ficam assim:</strong> ${valoresAdicionados}!`)
        criarItem(`<strong>O menor valor digitado foi:</strong> ${valoresAdicionados[0]}!`)
        criarItem(`<strong>O maior valor digitado foi:</strong> ${valoresAdicionados[valoresAdicionados.length-1]}!`)

        valoresAdicionados = []
        btnLimpar.classList.remove('displayNone')
    }
}

// Função de limpar:
function limpar(){
    btnLimpar.classList.add('displayNone')
    displayListaValores.innerHTML = ''
}

// Botão de Adicionar, e chamada da função de adicionar valores:
const btnAdicionar = document.getElementById('btnAdicionar')
btnAdicionar.addEventListener('click', adicionar)
// Botão de Finalizar, e chamada da função de analisar valores:
const btnAnalisar = document.getElementById('btnAnalisar')
btnAnalisar.addEventListener('click', analisar)
// Botão de limpar, e chamada da função de limpar:
const btnLimpar = document.getElementById('btnLimpar')
btnLimpar.addEventListener('click', limpar)