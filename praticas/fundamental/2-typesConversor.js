function intToFloat(givenValue){
    console.log( '---------- INTEGER TO FLOATING CONVERSION: ----------' )

    try{
        if( isNaN(givenValue) ){
            throw new Error( 'The given value is not a number!' )
        }
        
        if( !Number.isInteger(givenValue) ) {
            throw new Error( 'The given value is not a integer!' )
        }

        let result = parseFloat(givenValue)

        console.log(`The integer value: ${givenValue} has been converted to a floating value: ${result.toFixed(2)}!`)
    } catch(error) {
        console.log(` [ERROR] ${error.message} `)
    }
}



function floatToInt(givenValue){
    console.log( '---------- FLOATING TO INTEGER CONVERSION: ----------' )

    try {
        
        if(isNaN(givenValue)){
            throw new Error( 'Invalid given value!' )
        }

        if(Number.isInteger(givenValue)){
            throw new Error('The given value is not a floating number!')
        }

        let result = parseInt(givenValue)
        
        console.log(`The floating value: ${givenValue} has been converted for a integer value: ${result} `)

    } catch (error) {
        console.log(`[ERROR] ${error.message}`)
    }
}


function numberToString(givenValue){
    console.log( '---------- NUMBER TO STRING CONVERSION: ----------' )

    try {
        if( isNaN(givenValue) ){
            throw new Error( 'The given value is not a number!' )
        }

        let result = String(givenValue)
        console.log( `The number: ${givenValue} has been converted to a string: "${result}"` )
        console.log( `And his typeof has changed of ${typeof(givenValue)}, to: ${typeof(result)}` )
    } catch (error) {
        console.log( `[ERROR] ${error.message}` )
    }
}

function stringToNumber(givenValue){
    console.log( '---------- STRING TO NUMBER CONVERSION: ----------' )
    
    // tente:
    try {
        // resultado é: o valor dado (texto) transformado em numero:
        let result = Number(givenValue)

        // se o valor dado (texto) não contém números, mostre esse erro:
        if(isNaN(givenValue)){
            throw new Error( 'Your string contains inconvertible characters to number!' )
        }

        // se o resultado não for um número, mostre esse erro:
        if(isNaN(result)){
            throw new Error( 'The given value is not a number!' )
        }

        // agora mostra o valor antigo, em forma de string, e o valor novo convertido:
        console.log( `The string: ${givenValue} was been converted for a number: ${result}` )

        // mostra também que o tipo dos dados foi mudado de texto pra numero!
        console.log( `And his typeof was changed of ${typeof(givenValue)}, to ${typeof(result)}` )

      // se não der, faz isso aqui:
    } catch (error) {
        console.log( `[ERROR] ${error.message}` )
    }
}


intToFloat(10)
floatToInt(82.93)
numberToString(45)
stringToNumber('23212312312312321')