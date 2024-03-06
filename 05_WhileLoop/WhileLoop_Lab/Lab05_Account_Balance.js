function task(input){
    let index = 0
    let balance = 0
    while (true){

        let data = input[index]

        if (data === "NoMoreMoney") break

        if (data < 0){
            console.log("Invalid operation!")
            break
        }

        balance += Number(data)
        console.log(`Increase: ${data.toFixed(2)}`)
        index++
    }

    console.log(`Total: ${balance.toFixed(2)}`)
}