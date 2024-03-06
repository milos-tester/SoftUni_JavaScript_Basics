function task (input){
    let firstNumber = Number(input[0])
    let sum = 0
    let index = 1

    while(true){
        let data = Number(input[index])
        sum += data
        if (sum >= firstNumber) break

        index++
    }
    console.log(sum)
}