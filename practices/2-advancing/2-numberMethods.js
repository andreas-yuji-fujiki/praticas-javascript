const numbersList = [1,2,3,4,5,6,7,8]

// finds the first value that matches with the criterion
const evenNumber = numbersList.find( (num) => num % 2 == 0  )
console.log('First even number found: ' + evenNumber)

// finds all the value that matches with the criterion
const allEvenNumbers = numbersList.filter( (num) => num % 2 == 0 )
console.log(`All the even numbers found: ${allEvenNumbers}`)