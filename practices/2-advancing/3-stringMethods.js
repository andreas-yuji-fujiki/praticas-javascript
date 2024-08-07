const phrase = '   Hello World!     '

// removing the empty spaces:
const trimPhrase = phrase.trim()

console.log(`Before Trim: ${phrase}`)
console.log(`After Trim: ${trimPhrase}`)


console.log('---------- ---------- ----------')


// separating words:
const wordsQuantity = trimPhrase.split(' ').length
console.log(`Your phrase haves: ${wordsQuantity} words.`)


console.log('---------- ---------- ----------')


// separating letters:
const lettersQuantity = trimPhrase.split('').length
console.log(`Your phrase haves: ${lettersQuantity} letters.`)


console.log('---------- ---------- ----------')


// verify if it starts with something specific
const criterion1 = 'hello'
const criterion2 = 'Hello'

const startsWithJava = trimPhrase.startsWith(criterion1)
const startsWithjava = trimPhrase.startsWith(criterion2)

console.log(`Your phrase starts with ${criterion1}?`)
if (startsWithJava == true) {
    console.log('Yes!')
} else {
    console.log('No!')
}

console.log(`Your phrase starts with ${criterion2}?`)
if (startsWithjava == true) {
    console.log('Yes!')
} else {
    console.log('No!')
}


console.log('---------- ---------- ----------')


// verify if it ends with something specific:
const criterion3 = 'world!'
const criterion4 = 'World!'

const endsWithWorld = trimPhrase.endsWith(criterion4)
const endsWithworld = trimPhrase.endsWith(criterion3)

console.log(`Your phrase ends with ${criterion4}?`)
if (endsWithWorld == true) {
    console.log('Yes!')
} else {
    console.log('No!')
}

console.log(`Your phrase ends with ${criterion3}?`)
if (endsWithworld == true) {
    console.log('Yes!')
} else {
    console.log('No!')
}