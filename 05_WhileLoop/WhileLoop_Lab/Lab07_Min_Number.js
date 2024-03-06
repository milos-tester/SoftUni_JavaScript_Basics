function task(input){

    let min = Infinity
    let index = 0

    while(true){
        let data = input[index]
        if (String(data) === "Stop") break
        if (Number(data) < min) {
            min = data
        }
        index++
    }
    console.log(min)  
}