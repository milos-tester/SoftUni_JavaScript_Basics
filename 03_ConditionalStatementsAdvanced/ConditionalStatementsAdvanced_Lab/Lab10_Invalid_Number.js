function task(input){
    var number = Number(input)

    if (number >= 100 && number <= 200 || number === 0){
        console.log("valid")
    }
    else console.log("invalid")
}