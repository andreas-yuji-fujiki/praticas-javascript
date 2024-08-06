const phraseProcessor = (phrase) => {
    try {
        // i know this below is unnecessary, just exploring!
        // !String(phrase) is enough, i know it!
        if(!String(phrase) || !isNaN(phrase) || Object(phrase) || Array(phrase)){
            throw new Error('The phrase should be a string!')
            return
        }

        const phraseCharacters = phrase.trim().length
        const phraseWords = phrase.trim().split(' ').length

        if(phraseWords <= 1 || !phraseWords ){
            throw new Error('Invalid Phrase!')
        }
    
        console.log('---------- PHRASE PROCESSOR: ----------')
    
        console.log(`The phrase is: ${phrase}`)
        console.log(`Quantity of letters: ${phraseCharacters}.`)
        console.log(`Quantity of words: ${phraseWords}.`)

    } catch (error) {
        console.log(`[ERROR] ${error.message}`)
    }
}
phraseProcessor('Hello! My name is Andreas Pinheiro!')