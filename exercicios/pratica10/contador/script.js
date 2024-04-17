// Selecionando o botão de contar
const btnContar = document.getElementById('btnContar');

// Adicionando um ouvinte de evento para o clique no botão
btnContar.addEventListener('click', contar);

// Função para contar
function contar() {
    // Obtendo os valores dos campos de entrada e convertendo para números
    const inicio = Number(document.getElementById('txtInicio').value);
    const fim = Number(document.getElementById('txtFim').value);
    const passo = Number(document.getElementById('txtPasso').value);

    // Selecionando o elemento onde o resultado será exibido
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Verificando se os valores de entrada são válidos
    if (inicio <= 0) {
        alert('[ERRO] Defina um início válido!');
        resultado.innerText = 'Início inválido!';
    } else if (fim <= 0) {
        alert('[ERRO] Defina um final válido!');
        resultado.innerText = 'Final inválido!';
    } else if (passo <= 0) {
        alert('[ERRO] Defina um passo válido!');
        resultado.innerText = 'Passo inválido!';
    } else {
        // Exibindo uma mensagem indicando que a contagem está em andamento
        resultado.innerHTML = '<strong>Contando: </strong>';

        // Realizando a contagem com base nos valores fornecidos
        if (inicio < fim) {
            for (let c = inicio; c <= fim; c += passo) {
                resultado.innerText += `\u{1F449} ${c} `;
            }
        } else {
            for (let c = inicio; c >= fim; c -= passo) {
                resultado.innerText += `\u{1F449} ${c}`;
            }
        }

        // Adicionando um emoji de bandeira indicando o término da contagem
        resultado.innerHTML += `\u{1F3C1}`;
    }
}
