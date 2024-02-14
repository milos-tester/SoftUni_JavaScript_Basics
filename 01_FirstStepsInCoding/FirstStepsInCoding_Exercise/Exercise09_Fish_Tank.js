function task(lengthInput, widthInput, heightInput, precentageInput){
    var length = Number(lengthInput)
    var width = Number(widthInput)
    var height = Number(heightInput)
    var percentage = Number(precentageInput)

    let volume = length * width * height
    let volume_in_liters = volume / 1000
    let result = volume_in_liters * (1 - percentage/100)
    console.log(result)

}