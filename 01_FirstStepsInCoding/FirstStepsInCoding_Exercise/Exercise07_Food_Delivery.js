function task(chickenInput, fishInput, vegetarianInput){
    var chicken = Number(chickenInput)
    var fish = Number(fishInput)
    var vegeterian = Number(vegetarianInput)

    let total_price = chicken * 10.35 + fish * 12.40 + vegeterian * 8.15
    let desert = total_price * 0.20
    let result = total_price + desert + 2.50
    console.log(result)
}