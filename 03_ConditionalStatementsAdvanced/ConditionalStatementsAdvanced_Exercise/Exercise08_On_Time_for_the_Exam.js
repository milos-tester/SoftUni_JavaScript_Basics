function task (examHourInput, examMinInput, arrivalHourInput, arrivalMinInput){
    var examHour = Number(examHourInput)
    var examMin = Number(examMinInput)
    var arrivalHour = Number(arrivalHourInput)
    var arrivalMin = Number(arrivalMinInput)

    let examTime = examHour * 60 + examMin
    let arrivalTime = arrivalHour * 60 + arrivalMin

    if (arrivalTime === examTime) console.log("On time")
    else if (arrivalTime<=examTime) {
        let difference = examTime - arrivalTime
        if (difference === 0) console.log("On time")
        else if (difference<=30) console.log(`On time\n${difference} minutes before the start`)
        else if (difference > 30 && difference < 60) console.log(`Early\n${difference} minutes before the start`)
        else if (difference >= 60){
            let hoursDifference = Math.floor(difference / 60)
            let minutesDifference = difference % 60
            if (minutesDifference < 10) console.log(`Early\n${hoursDifference}:0${minutesDifference} hours before the start`)
            else console.log(`Early\n${hoursDifference}:${minutesDifference} hours before the start`)
        }
    }
    else {
        difference = arrivalTime - examTime
        if (difference < 60) console.log(`Late\n${difference} minutes after the start`)
        else{
            hoursDifference = Math.floor(difference / 60)
            minutesDifference = difference % 60
            if (minutesDifference < 10) console.log(`Late\n${hoursDifference}:0${minutesDifference} hours after the start`)
            else console.log(`Late\n${hoursDifference}:${minutesDifference} hours after the start`)
        }
    }
}