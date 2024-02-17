function task(numberOneInput, numberTwoInput, operatorInput){
    var number_one = Number(numberOneInput)
    var number_two = Number(numberTwoInput)
    var operatorInput = String(operatorInput)

    let result = 0
    let operator = ""
    let even_or_odd = ""

    if (operatorInput === "+"){
        result = number_one + number_two
        operator = "+"
        if (result % 2 === 0) {even_or_odd = "even"}
        else {even_or_odd = "odd"}
        console.log(`${number_one} ${operator} ${number_two} = ${result} - ${even_or_odd}`)
    }
    else if (operatorInput === "-"){
        result = number_one - number_two
        operator = "-"
        if (result % 2 === 0) {even_or_odd = "even"}
        else {even_or_odd = "odd"}
        console.log(`${number_one} ${operator} ${number_two} = ${result} - ${even_or_odd}`)
    }
    else if (operatorInput === "*"){
        result = number_one * number_two
        operator = "*"
        if (result % 2 === 0) {even_or_odd = "even"}
        else {even_or_odd = "odd"}
        console.log(`${number_one} ${operator} ${number_two} = ${result} - ${even_or_odd}`)
    }
    else if (operatorInput === "/"){
        operator = "/"
        if (number_two === 0) {console.log(`Cannot divide ${number_one} by zero`)}
        else {
            result = number_one / number_two
            console.log(`${number_one} ${operator} ${number_two} = ${result.toFixed(2)}`)
        }
    }
    else if (operatorInput === "%"){
        operator = "%"
        if (number_two === 0) {console.log(`Cannot divide ${number_one} by zero`)}
        else{
            result = number_one % number_two
            console.log(`${number_one} ${operator} ${number_two} = ${result}`)
        }
    }
}