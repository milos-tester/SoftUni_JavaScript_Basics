function task(typeInput, rowsInpunt, colsInput){
    var type = String(typeInput)
    var rows = Number(rowsInpunt)
    var cols = Number(colsInput)

    let income = 0

    if (type === "Premiere") income = rows * cols * 12.00
    else if (type === "Normal") income = rows * cols * 7.50
    else if (type === "Discount") income = rows * cols * 5.00

    console.log(`${income.toFixed(2)}`)
}