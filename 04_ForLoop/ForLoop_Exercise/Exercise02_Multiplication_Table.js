function task(numberInput){
    var number = Number(numberInput)
    let i

    for (i = 1; i <= 10; i++){
        console.log(`${i} * ${number} = ${i*number}`)
    }
}