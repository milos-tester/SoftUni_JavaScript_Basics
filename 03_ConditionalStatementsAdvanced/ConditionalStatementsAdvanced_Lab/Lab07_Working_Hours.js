function task(hoursInput, dayInput){
    var hours = Number(hoursInput)
    var day = String(dayInput)

    if (hours >= 10 && hours <= 18){
        switch (day){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open")
                break
            default:
                console.log("closed")
        }
    }
    else console.log("closed")
}