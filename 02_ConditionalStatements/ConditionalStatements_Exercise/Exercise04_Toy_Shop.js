function task (priceInput, puzzlesInput, dollsInput, bearsInput, minionsInput, trucksInput){


    var price_of_the_trip = Number(priceInput)
    var puzzle = Number(puzzlesInput) * 2.60
    var talking_doll = Number(dollsInput) * 3.00
    var teddy_bear = Number(bearsInput) * 4.10
    var minion = Number(minionsInput) * 8.20
    var truck = Number(trucksInput) * 2.00

    let toys_price = puzzle  + talking_doll  + teddy_bear + minion  + truck

    let num_toys = Number(puzzlesInput) + Number(dollsInput) + Number(bearsInput) + Number(minionsInput) + Number(trucksInput)
    if (num_toys >= 50) toys_price = toys_price * 0.75

    let rent = toys_price * 0.10
    let profit = toys_price - rent
    let remaining = profit - price_of_the_trip
    let needed_money = price_of_the_trip - profit
    if (profit >= price_of_the_trip) console.log(`Yes! ${remaining.toFixed(2)} USD left.`)
    else console.log(`Not enough money! ${needed_money.toFixed(2)} USD needed.`)
}