function task(numberInput){
    var number = Number(numberInput)
    let i
    for (i = 0; i <= number; i++){
        if (i % 2 == 0){
            let result = Math.pow(2, i)
            console.log(result)
        }
    }
}