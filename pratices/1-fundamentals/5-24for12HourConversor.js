function hourConversor(stringHour){
    try {
    // treating errors:

        // checking if it is not a string
        if( typeof(stringHour) !== 'string' ){
            throw new Error('The given value should be an string!')
        }

        // checking if it is on the valid format
        const validHourFormat = /^\d{2}:\d{2}$/
        if( !validHourFormat.test(stringHour) ){
            throw new Error('Invalid hour format! Should be like: 14:32')
        }

        // checking if it is a logical hour with sense
        const hour = Number(stringHour.split(':')[0])
        const minute = Number(stringHour.split(':')[1])
        
        if( hour > 23 || hour < 0 ){
            throw new Error('Invalid hour!')
        }

        if( minute > 59 || minute < 0 ){
            throw new Error('Invalid minute!')
        }


    // then:
        let convertedHour = hour % 12

        // preventing the conversed hour and minutes to be equals 0
        if( hour == 12 || hour == 0 ){
            convertedHour = 12
        }

        if( minute == 12 ){
            minute = 12
        }
        
        // then formatting to display
        const formattedHour = convertedHour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');

        // adding the suffix
        let suffix
        if(hour >= 1 && hour <= 11){
            suffix = 'AM'
        }else{
            suffix = 'PM'
        }

        // displaying results:
        console.log( '---------- HOUR FORMAT CONVERSION: ----------' )
        console.log(`24 Hour format: ${hour}:${minute}`)
        console.log(`12 Hour Format: ${formattedHour}:${formattedMinute} ${suffix}`)
        console.log('---------- ---------- ---------- ------------')
        

    } catch (error) {
        console.log(`[ERROR] ${error.message}`)
    }
}

// (24 hours) format: hh / mm
// example: 14:32 
// another example: 00:59
hourConversor('11:40')