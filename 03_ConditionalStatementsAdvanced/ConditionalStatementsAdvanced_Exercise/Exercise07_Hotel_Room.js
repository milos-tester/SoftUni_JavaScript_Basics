function task (monthInput, nightsInput){
    month = String(monthInput)
    nights = Number(nightsInput)

    var apartment_price = 0
    var studio_price = 0

    if (month === "May" || month === "October"){
        apartment_price = nights * 65.00
        studio_price = nights * 50.00
        if (nights > 7 && nights <= 14){
            studio_price *= 0.95
        }
        else if (nights > 14){
            studio_price *= 0.70
            apartment_price *= 0.90
        }
    }
    else if (month === "June" || month === "September"){
        apartment_price = nights * 68.70
        studio_price = nights * 75.20
        if (nights > 14){
            studio_price *= 0.80
            apartment_price *= 0.90
        }
    }
    else if (month === "July" || month === "August"){
        apartment_price = nights * 77.00
        studio_price = nights * 76.00
        if (nights > 14) apartment_price *= 0.90
    }
    console.log(`Apartment: ${apartment_price.toFixed(2)} USD.\nStudio: ${studio_price.toFixed(2)} USD.`)
}