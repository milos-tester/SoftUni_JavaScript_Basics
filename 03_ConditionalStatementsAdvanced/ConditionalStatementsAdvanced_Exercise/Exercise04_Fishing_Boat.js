function task (budgetInput, seasonInput, fishermanInput){
    var budget = Number(budgetInput)
    var season = String(seasonInput)
    var fisherman = Number(fishermanInput)

    let price = 0

    if (season === "Spring"){
        price = 3000
        if (fisherman <= 6){
            price *= 0.90
        }
        else if (fisherman > 6 && fisherman <= 11){
            price *= 0.85
        }
        else if (fisherman > 11){
            price *= 0.75
        }
    }
    else if (season === "Summer" || season === "Autumn"){
        price = 4200
        if (fisherman <= 6){
            price *= 0.90
        }
        else if (fisherman > 6 && fisherman <= 11){
            price *= 0.85
        }
        else if (fisherman > 11){
            price *= 0.75
        }
    }
    else if (season === "Winter"){
        price = 2600
        if (fisherman <= 6){
            price *= 0.90
        }
        else if (fisherman > 6 && fisherman <= 11){
            price *= 0.85
        }
        else if (fisherman > 11){
            price *= 0.75
        }
    }

    if (fisherman % 2 == 0 && season !== "Autumn") price *= 0.95

    if (budget >= price){
        let remain = budget - price
        console.log(`Yes! You have ${remain.toFixed(2)} USD left.`)
    }
    else{
        let needed = price - budget
        console.log(`Not enough money! You need ${needed.toFixed(2)} USD.`)
    }
}