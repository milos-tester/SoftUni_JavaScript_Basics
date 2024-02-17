function task(daysInput, roomInput, feedbackInput){
    var days = Number(daysInput)
    var room = String(roomInput)
    var feedback = String(feedbackInput)

    let nights = days - 1
    let price = 0
    if (room === "room for one person") price = 18.00 * nights
    else if (room === "apartment"){
        price = 25.00 * nights
        if (days < 10) price *= 0.70
        else if (days >= 10 && days <= 15) price *= 0.65
        else if (days > 15) price *= 0.50
    }
    else if (room === "president apartment"){
        price = 35.00 * nights
        if (days < 10) price *= 0.90
        else if (days >= 10 && days <= 15) price *= 0.85
        else if (days > 15) price *= 0.80
    }
    if (feedback === "positive") price *= 1.25
    else if (feedback === "negative") price *= 0.90

    console.log(`${price.toFixed(2)}`)
}