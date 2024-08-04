function printMessage(message){
    console.log(message)
}

const myself = {
    firstName: "Andreas",
    lastName: "Pinheiro",
    age: 16,
    mainStack: "JavaScript"
}

printMessage('Hello World!')
printMessage(`My name is ${myself.firstName} ${myself.lastName}, i'm ${myself.age} years old, and i'm a ${myself.mainStack} dev!`)