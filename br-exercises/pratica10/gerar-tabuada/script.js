const btnCriar = document.getElementById('btnCriar')
btnCriar.addEventListener('click', gerarTabuada)

function gerarTabuada(){
    const tabuada = Number(document.getElementById('txtTabuada').value)
    const resultado = document.getElementById('resultado')

    if(tabuada == 0){
        alert('[ERRO] Defina um valor válido!')
        resultado.innerText = 'Valor inválido.'
    }else{
        resultado.innerHTML = ''
        for(let c = 1; c <= 10; c += 1){
            resultado.innerHTML += `${tabuada} x ${c} = ${tabuada*c} <br>`
        }
    }
}