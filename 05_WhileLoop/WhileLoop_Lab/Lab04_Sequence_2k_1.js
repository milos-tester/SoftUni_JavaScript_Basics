function task (input){
    let counter = 1
    let endNumber = Number(input)

    while (true){
        if (counter > endNumber) break
        console.log(counter)
        counter = counter * 2 + 1
    }
}