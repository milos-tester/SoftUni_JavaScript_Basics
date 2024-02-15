function task(hoursInput, minutesInput){
    var hours = Number(hoursInput)
    var minutes = Number(minutesInput)

    let total_minutes = hours * 60 + minutes + 15

    let result_hour = Math.floor(total_minutes / 60)
    let result_minutes = total_minutes % 60

    if (result_hour == 24) result_hour = 0
    
    if (result_minutes < 10) console.log(`${result_hour}:0${result_minutes}`)
    else console.log(`${result_hour}:${result_minutes}`)
}