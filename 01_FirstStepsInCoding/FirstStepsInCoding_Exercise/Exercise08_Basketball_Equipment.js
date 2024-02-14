function task(feeInput){
    var fee = Number(feeInput)
    let sneakers = fee * 0.60
    let suit = sneakers * 0.80
    let ball = suit * 0.25
    let accessories = ball * 0.20
    let result = fee + sneakers + suit + ball + accessories
    console.log(result)
}