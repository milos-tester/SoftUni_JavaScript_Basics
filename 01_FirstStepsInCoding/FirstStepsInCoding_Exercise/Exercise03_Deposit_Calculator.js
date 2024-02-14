function task (depositInput, termInput, rateInput){
    var deposit = Number(depositInput)
    var term = Number(termInput)
    var rate = Number(rateInput)

    let interest = deposit * rate / 100
    let interest_for_one_month = interest / 12
    let total = deposit + interest_for_one_month * term
    console.log(total.toFixed(2))
}