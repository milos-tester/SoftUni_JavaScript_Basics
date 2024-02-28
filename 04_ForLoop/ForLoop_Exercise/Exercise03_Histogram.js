function task(numberInput){
    let counter1 = 0
    let counter2 = 0
    let counter3 = 0
    let counter4 = 0
    let counter5 = 0

    let end = numberInput[0]
    let i = 0

    for (i = 1; i <= end; i++){
        let number = Number(numberInput[i])
        if (number < 200) counter1++
        else if (number >= 200 && number <= 399) counter2++
        else if (number >= 400 && number <= 599) counter3++
        else if (number >= 600 && number <= 799) counter4++
        else if (number >= 800) counter5++
        }
    
    let result1 = counter1 / end * 100
    let result2 = counter2 / end * 100
    let result3 = counter3 / end * 100
    let result4 = counter4 / end * 100
    let result5 = counter5 / end * 100
    console.log(`${result1.toFixed(2)}%\n${result2.toFixed(2)}%\n${result3.toFixed(2)}%\n${result4.toFixed(2)}%\n${result5.toFixed(2)}%`)
}