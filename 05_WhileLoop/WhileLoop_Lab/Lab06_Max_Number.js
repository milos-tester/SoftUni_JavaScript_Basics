function task(input){

    let max = -Infinity
    let index = 0

    while(true){
        let data = input[index]
        if (String(data) === "Stop") break
        if (Number(data) > max) {
            max = data
        }
        index++
    }
    console.log(max)  
}