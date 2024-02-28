function task(numberInput){
    var number = String(numberInput)
    let i
    let sum = 0
    for (i = 0; i < number.length; i++){
        sum += Number(number.charAt(i))
    }
    console.log(`The sum of the digits is:${sum}`)
}