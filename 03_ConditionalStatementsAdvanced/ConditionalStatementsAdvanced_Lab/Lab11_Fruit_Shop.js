function task(fruitInput, dayInput, quantityInput){
    var fruit = String(fruitInput)
    var day = String(dayInput)
    var quantity = Number(quantityInput)

    let price = 0
    let result = 0

    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch(fruit){
                case "banana":
                    price = 2.50
                    result = price * quantity
                    console.log(`${result.toFixed(2)}`)
                    break
                case "apple":
                    price = 1.20
                    result = price * quantity
                    console.log(`${result.toFixed(2)}`)
                    break
                case "orange":
                    price = 0.85
                    result = price * quantity
                    console.log(`${result.toFixed(2)}`)
                    break
                case "grapefruit":
                    price = 1.45
                    result = price * quantity
                    console.log(`${result.toFixed(2)}`)
                    break
                case "kiwi":
                    price = 2.70
                    result = price * quantity
                    console.log(`${result.toFixed(2)}`)
                    break
                case "pineapple":
                    price = 5.50
                    result = price * quantity
                    console.log(`${result.toFixed(2)}`)
                    break
                case "grapes":
                    price = 3.85
                    result = price * quantity
                    console.log(`${result.toFixed(2)}`)
                    break
                default:
                    console.log("error")
                    break
            }
        break
        case "Saturday":
        case "Sunday":
            switch(fruit){
                case "banana":
                    price = 2.70
                    result = price * quantity
                    console.log(`${result.toFixed(2)}`)
                    break
                case "apple":
                    price = 1.25
                    result = price * quantity
                    console.log(`${result.toFixed(2)}`)
                    break
                case "orange":
                    price = 0.90
                    result = price * quantity
                    console.log(`${result.toFixed(2)}`)
                    break
                case "grapefruit":
                    price = 1.60
                    result = price * quantity
                    console.log(`${result.toFixed(2)}`)
                    break
                case "kiwi":
                    price = 3.00
                    result = price * quantity
                    console.log(`${result.toFixed(2)}`)
                    break
                case "pineapple":
                    price = 5.60
                    result = price * quantity
                    console.log(`${result.toFixed(2)}`)
                    break
                case "grapes":
                    price = 4.20
                    result = price * quantity
                    console.log(`${result.toFixed(2)}`)
                    break
                default:
                    console.log("error")
                    break
            }
        break
        default:
            console.log("error")
            break
    }
}