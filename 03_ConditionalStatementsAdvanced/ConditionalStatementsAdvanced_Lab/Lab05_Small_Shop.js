function task(productInput, cityInput, quantityInput){
    var product = String(productInput)
    var city = String(cityInput)
    var quantity = Number(quantityInput)

    let price = 0
    let result = 0

    switch (city){
        case "London":
            switch(product){
                case "coffee":
                    price = 0.50
                    break
                case "water":
                    price = 0.80
                    break
                case "beer":
                    price = 1.20
                    break
                case "sweets":
                    price = 1.45
                    break
                case "peanuts":
                    price = 1.60
                    break
            }
            break
        case "Rome":
            switch(product){
                case "coffee":
                    price = 0.40
                    break
                case "water":
                    price = 0.70
                    break
                case "beer":
                    price = 1.15
                    break
                case "sweets":
                    price = 1.30
                    break
                case "peanuts":
                    price = 1.50
                    break
            }
            break
        case "Paris":
            switch(product){
                case "coffee":
                    price = 0.45
                    break
                case "water":
                    price = 0.70
                    break
                case "beer":
                    price = 1.10
                    break
                case "sweets":
                    price = 1.35
                    break
                case "peanuts":
                    price = 1.55
                    break
            }
            break
    }
    result = price * quantity
    console.log(result)
}