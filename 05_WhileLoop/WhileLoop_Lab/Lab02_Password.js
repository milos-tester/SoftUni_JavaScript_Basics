function task (input){
    let username = input[0]
    let password = input[1]
    let index = 2

    while (true){
        let data = input[index]
        if (data === password){
            console.log(`Welcome ${username}!`)
            break
        }
        index++
    }
}