function task(input){
    let side_a = Number(input[0])
    let side_b = Number(input[1])
    let side_c = Number(input[2])

    let dimension = side_a * side_b * side_c

    let index = 3

    while(true){
        let data = input[index]

        if (data === "Done"){
            console.log(`${dimension} Cubic meters left.`)
            break
        }
        dimension -= Number(data)

        if (dimension <= 0){
            console.log(`No more free space! You need ${Math.abs(dimension)} Cubic meters more.`)
            break
        }

        index++
    }
}