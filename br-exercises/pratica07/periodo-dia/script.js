//main function
function updateDisplay(){
    //vars
    const greeting = document.getElementById('greeting')
    const currentTime = document.getElementById('currentTime')
    const displayTimeContainer = document.getElementById('displayTimeContainer')
    const img = document.getElementById('img')
    const copy = document.getElementById('copy')
    let today = new Date()
    let hour =  today.getHours()


    currentTime.innerHTML = `Agora são <strong>${hour}</strong> horas.`
    if(hour >= 0 && hour < 12){
        greeting.innerText = 'Bom Dia!'
        img.src = 'img/day.png'
        document.body.style.backgroundColor = 'rgb(255, 255, 204)'
        displayTimeContainer.style.backgroundColor = 'rgb(192, 192, 192)'


    }else if(hour >= 12 && hour < 18){
        greeting.innerText = 'Boa Tarde!'
        img.src = 'img/afternoon.png'
        document.body.style.backgroundColor = 'rgb(230, 230, 250)'
        displayTimeContainer.style.backgroundColor = 'rgb(204, 229, 255)'


    }else{
        greeting.innerText = 'Boa Noite!'
        greeting.style.color = 'white'
        copy.style.color = 'white'
        img.src = 'img/night.png'
        document.body.style.backgroundColor = 'rgb(0, 31, 63)'
        displayTimeContainer.style.backgroundColor = 'rgb(180, 160, 200)'
    }
}

//event handler
document.body.addEventListener('load', updateDisplay())