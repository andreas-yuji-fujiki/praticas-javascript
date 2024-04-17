let amigo = {
    nome: 'Felipe',
    idade: 18,
    peso: 70.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(amigo.peso)