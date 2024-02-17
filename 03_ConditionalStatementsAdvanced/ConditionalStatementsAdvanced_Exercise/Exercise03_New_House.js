function task(flowersTypeInput, flowersCountInput, budgetInput){
    var flowersType = String(flowersTypeInput)
    var flowersCount = Number(flowersCountInput)
    var budget = Number(budgetInput)

    let price = 0

    if (flowersType === "Roses"){
        price = flowersCount * 5.00
        if (flowersCount > 80){
            price *= 0.90
        }
    }
    else if (flowersType === "Dahlias"){
        price = flowersCount * 3.80
        if (flowersCount > 90){
            price *= 0.85
        }
    }
    else if (flowersType === "Tulips"){
        price = flowersCount * 2.80
        if (flowersCount > 80){
            price *= 0.85
        }
    }
    else if (flowersType === "Narcissus"){
        price = flowersCount * 3.00
        if (flowersCount < 120){
            price *= 1.15
        }
    }
    else if (flowersType === "Gladiolus"){
        price = flowersCount * 2.50
        if (flowersCount < 80){
            price *= 1.20
        }
    }

    if (budget >= price){
        let remain = budget - price
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${remain.toFixed(2)} USD left.`)
    }
    else{
        let needed = price - budget
        console.log(`Not enough money, you need ${needed.toFixed(2)} USD more.`)
    }
}