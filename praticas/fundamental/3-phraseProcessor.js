const phraseProcessor = (phrase) => {
    try {
        // fixed mistake here =}
        if(typeof(phrase) != 'string'){
            throw new Error('The phrase should be a string!')
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
phraseProcessor(0)