function task (input){
    let index = 0;

    while (true){
        let data = input[index]
        if (data === "Stop") break;

        console.log(data)
        index++
    }
}