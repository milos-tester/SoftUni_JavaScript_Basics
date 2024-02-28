function task (input){

    let tournamets_number = input[0]
    let points = input[1]
    let data = input
    let count = 0

    for (let i = 2; i <= tournamets_number + 2; i++){
        if (String(data[i]) === "W") {
            points += 2000
            count++
        }
        else if (String(data[i]) === "F") points += 1200
        else if (String(data[i]) === "SF") points += 720
    }

    console.log(`Final points: ${points}`)
    console.log(`Average points: ${Math.floor((points - input[1])/tournamets_number)}`)
    console.log(`${(count/tournamets_number * 100).toFixed(2)}%`)
}