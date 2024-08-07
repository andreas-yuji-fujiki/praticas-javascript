const namesLister = (namesArray) => {
    try {
        if(!Array.isArray(namesArray)){
            throw new Error('The given value should be an array!')
        }

        const namesQuantity = namesArray.length

        if(namesQuantity <= 1){
            throw new Error('You should give more names for the list!')
        }
    
        console.log('---------- INVITED PEOPLE LIST: ----------')

        for(i = 0; i < namesQuantity; i++){
            console.log(`${i+1}. ${namesArray[i]} !`)
        }

        console.log('---------- ---------- ---------- ----------')
    } catch (error) {
        console.log(`[ERROR] ${error.message}`)
    }
}
// Give an array of names:
namesLister( ['Apollo', 'Marie', 'Joseph', 'Cristine', 'Mark', 'Amber'] )