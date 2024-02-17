function task(budgetInput, seasonInput){
    var budget = Number(budgetInput)
    var season = String(seasonInput)

    let result = 0
    let destination = ""
    let type = ""

    switch(season){
        case "summer":
            if (budget <= 100) {result = budget * 0.30
            destination = "Bulgaria"
            type = "Camp"}
            else if (budget > 100 && budget <= 1000) {result = budget * 0.40
            destination = "Balkans"
            type = "Camp"}
            else if (budget > 1000) {result = budget * 0.90
            destination = "Europe"
            type = "Hotel"}
            break
        case "winter":
            if (budget <= 100) {result = budget * 0.70
            destination = "Bulgaria"
            type = "Hotel"}
            else if (budget > 100 && budget <= 1000) {result = budget * 0.80
            destination = "Balkans"
            type = "Hotel"}
            else if (budget > 1000) {result = budget * 0.90
            destination = "Europe"
            type = "Hotel"}
            break
    }
    console.log(`Somewhere in ${destination}\n${type} - ${result.toFixed(2)}`)
}