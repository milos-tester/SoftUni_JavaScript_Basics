function task (input){
    let lily_age = Number(input[0])
    let washing_machine = Number(input[1])
    let toy_price = Number(input[2])

    let i
    let toy_count = 0
    let money_count = 0
    let brother_count = 0

    for (i = 1; i <= lily_age; i++){
        if (i % 2 === 0){
            money_count += i * 5
            brother_count++
        }
        else {
            toy_count++
        }
    }
    let result = money_count + (toy_count * toy_price) - brother_count

    if (result >= washing_machine) console.log(`Yes! ${(result-washing_machine).toFixed(2)}`)
    else console.log(`No! ${(washing_machine-result).toFixed(2)}`)
}