function task(input){
    let side_a = Number(input[0])
    let side_b = Number(input[1])
    let dimension = side_a * side_b
    let index = 2

    while (true){
        let data = input[index]
        if (data === "STOP") {
            console.log(`${dimension} pieces are left.`)
            break
        }

        dimension -= Number(data)

        if (dimension <= 0){
            console.log(`No more cake left! You need ${Math.abs(dimension)} pieces more.`)
            break
        }

        index++
    }

}