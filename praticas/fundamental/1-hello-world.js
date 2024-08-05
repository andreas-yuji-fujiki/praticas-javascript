function printMessage(message){
    console.log(message)
}
printMessage('Hello World!')


const myself = {
    firstName: "Andreas",
    lastName: "Pinheiro",
    age: 16,
    mainStack: "JavaScript"
}
printMessage(`My name is ${myself.firstName} ${myself.lastName}, i'm ${myself.age} years old, and i'm a ${myself.mainStack} dev!`)