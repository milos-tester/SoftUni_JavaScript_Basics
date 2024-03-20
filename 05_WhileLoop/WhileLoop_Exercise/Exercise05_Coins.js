function task(input){
    let money = Number(input)

    let change = parseInt(money * 100)
    let counter = 0

    while (true){
        if (change >= 200) change -= 200
        else if (change >= 100) change -= 100
        else if (change >= 50) change -= 50
        else if (change >= 20) change -= 20
        else if (change >= 10) change -= 10
        else if (change >= 5) change -= 5
        else if (change >= 2) change -= 2
        else if (change >= 1) change -=1

        counter++

        if (change === 0) break
    }
    console.log(counter)
}