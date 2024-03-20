function task (input){
    let book = String(input[0])
    let index = 1
    let counter = 0

    while(true){
        let data = input[index]
        if (data==="No More Books"){
            console.log("The book you search is not here!")
            console.log(`You checked ${counter} books.`)
            break
        }
        if (data===book) {
            console.log(`You checked ${counter} books and found it.`)
            break
        }
        index++
        counter++
    }
}