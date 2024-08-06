function intToFloat(givenValue){
    console.log( '---------- CONVERSÃO DE INTEIRO PARA FLUTUANTE: ----------' )

    try{
        if( isNaN(givenValue) ){
            throw new Error( 'O valor passado não é um número!' )
        }
        
        if( !Number.isInteger(givenValue) ) {
            throw new Error( 'O valor passado não é um inteiro!' )
        }

        let result = parseFloat(givenValue)

        console.log(`O valor inteiro: ${givenValue} foi convertido para flutuante: ${result.toFixed(2)}!`)
    } catch(error) {
        console.log(` [ERRO] ${error.message} `)
    }
}



function floatToInt(givenValue){
    console.log( '---------- CONVERSÃO DE FLUTUANTE PARA INTEIRO: ----------' )

    try {
        
        if(isNaN(givenValue)){
            throw new Error( 'O valor fornecido não é válido!' )
        }

        if(Number.isInteger(givenValue)){
            throw new Error('O valor passado não é um flutuante!')
        }

        let result = parseInt(givenValue)
        
        console.log(`O valor flutuante: ${givenValue} foi convertido para inteiro: ${result} `)

    } catch (error) {
        console.log(`[ERRO] ${error.message}`)
    }
}


function numberToString(givenValue){
    console.log( '---------- CONVERSÃO DE NUMERO PARA STRING: ----------' )

    try {
        if( isNaN(givenValue) ){
            throw new Error( 'O valor passado não é um número!' )
        }

        let result = String(givenValue)
        console.log( `O número: ${givenValue} foi convertido para string: "${result}"` )
        console.log( `Seu typeof foi de ${typeof(givenValue)}, para: ${typeof(result)}` )
    } catch (error) {
        console.log( `[ERRO] ${error.message}` )
    }
}

function stringToNumber(givenValue){
    console.log( '---------- CONVERSÃO DE STRING PARA NUMERO: ----------' )
    
    // tente:
    try {
        // resultado é: o valor dado (texto) transformado em numero:
        let result = Number(givenValue)

        // se o valor dado (texto) não contém números, mostre esse erro:
        if(isNaN(givenValue)){
            throw new Error( 'Sua string contém caracteres inconversíveis para número!' )
        }

        // se o resultado não for um número, mostre esse erro:
        if(isNaN(result)){
            throw new Error( 'O valor passado não é um número!' )
        }

        // agora mostra o valor antigo, em forma de string, e o valor novo convertido:
        console.log( `A string: ${givenValue} foi convertida para número: ${result}` )

        // mostra também que o tipo dos dados foi mudado de texto pra numero!
        console.log( `Seu typeof foi de ${typeof(givenValue)}, para ${typeof(result)}` )

      // se não der, faz isso aqui:
    } catch (error) {
        console.log( `[ERRO] ${error.message}` )
    }
}


intToFloat(10)
floatToInt(82.93)
numberToString(45)
stringToNumber('23212312312312321')