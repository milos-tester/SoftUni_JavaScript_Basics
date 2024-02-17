function task (degreesInput, typeOfDayInput){
    var degrees = Number(degreesInput)
    var typeOfDay = String(typeOfDayInput)

    let outfit = ""
    let shoes = ""

    if (degrees >= 10 && degrees <= 18){
        if (typeOfDay === "Morning"){
            outfit = "Sweatshirt"
            shoes = "Sneakers"
        }
        else if (typeOfDay === "Afternoon"){
            outfit = "Shirt"
            shoes = "Moccasins"
        }
        else if (typeOfDay === "Evening"){
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    }
    else if (degrees > 18 && degrees <= 24){
        if (typeOfDay === "Morning"){
            outfit = "Shirt"
            shoes = "Moccasins"
        }
        else if (typeOfDay === "Afternoon"){
            outfit = "T-Shirt"
            shoes = "Sandals"
        }
        else if (typeOfDay === "Evening"){
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    }
    else if (degrees > 24){
        if (typeOfDay === "Morning"){
            outfit = "T-Shirt"
            shoes = "Sandals"
        }
        else if (typeOfDay === "Afternoon"){
            outfit = "Swim Suit"
            shoes = "Barefoot"
        }
        else if (typeOfDay === "Evening"){
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}