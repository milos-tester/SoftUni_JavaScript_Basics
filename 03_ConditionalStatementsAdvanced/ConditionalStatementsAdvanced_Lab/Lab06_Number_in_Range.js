function task(numberInput){
    var number = Number(numberInput)

    if (number >= -100 && number <= 100){
        if (number === 0) console.log("No")
        else console.log("Yes")
    }
    else console.log("No")
}