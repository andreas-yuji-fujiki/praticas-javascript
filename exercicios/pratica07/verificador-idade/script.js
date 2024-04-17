const botaoVerificar = document.getElementById('botaoAnalisar');

function verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    const nascimento = document.getElementById('txtnascimento');
    const img = document.createElement('img')

    if (nascimento.value.length == 0 || Number(nascimento.value) > ano) {
        alert('[ERRO] Você deve informar um ano de nascimento válido!');
    } else {
        const inputSexo = document.getElementsByName('radioSex');
        const resultado = document.getElementById('resultado');
        const idade = ano - parseInt(nascimento.value);
        let genero = '';

        if (inputSexo[0].checked) {
            genero = 'Homem';
            if(idade != 0 && idade <= 12){
                img.setAttribute('src', 'img/garoto.png')
            }else if(idade <= 21){
                img.setAttribute('src', 'img/adolescenteHomem.png')
            }else if(idade > 21 && idade < 50){
                img.setAttribute('src', 'img/homem.png')
            }else if(idade > 50 && idade < 199){
                img.setAttribute('src', 'img/idoso.png')
            }else{
                img.setAttribute('src', 'img/caveira.png')
            }
        } else if (inputSexo[1].checked) {
            genero = 'Mulher';
            if(idade != 0 && idade <= 12){
                img.setAttribute('src', 'img/garota.png')
            }else if(idade < 21){
                img.setAttribute('src', 'img/adolescenteMulher.png')
            }else if(idade > 21 && idade < 50){
                img.setAttribute('src', 'img/mulher.png')
            }else if(idade > 50 && idade < 199){
                img.setAttribute('src', 'img/idosa.png')
            }else{
                img.setAttribute('src', 'img/caveira.png')
            }
        } else {
            alert('[ERRO] Houve um problema com a seleção de gênero, recarregar a página deve resolver o problema.');
        }
        resultado.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`;
        resultado.appendChild(img)
    }
}

botaoVerificar.addEventListener('click', verificar);