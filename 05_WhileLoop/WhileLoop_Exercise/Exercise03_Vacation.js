function task(input){
    let data = input
    let money_needed = Number(data[0])
    let available_money = Number(data[1])
    let spend_counter = 0
    let day_counter = 0

    let index = 2

    while (true){
        let action = String(data[index])
        let amount = Number(data[index+1])
        day_counter++

        if (action === "save") {
            available_money += amount
            spend_counter = 0
        }
        else if (action === "spend"){
            available_money -= amount
            spend_counter++
            if (available_money < 0) available_money = 0
        }
        if (spend_counter === 5){
            console.log(`You can't save the money.\n${day_counter}`)
            break
        }
        if (available_money >= money_needed){
            console.log(`You saved the money for ${day_counter} days.`)
            break
        }
        index += 2
    }
}