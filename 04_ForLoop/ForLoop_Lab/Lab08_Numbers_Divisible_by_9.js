function task(startInput, endInput){
    var start = Number(startInput)
    var end = Number(endInput)
    let i
    let sum = 0
    for (i = start; i <= end; i++){
        if (i % 9 === 0) sum += i
    }
    console.log(`The sum: ${sum}`)
    for (i = start; i <= end; i++){
        if (i % 9 === 0) console.log(i)
    }
}