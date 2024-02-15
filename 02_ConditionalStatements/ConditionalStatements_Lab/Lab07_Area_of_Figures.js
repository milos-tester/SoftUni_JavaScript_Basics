function task(shapeInput, numberOneInput, numberTwoInput){
    var shape = String(shapeInput)
    var numberOne = Number(numberOneInput)
    var numberTwo = Number(numberTwoInput)

    if (shape === "square"){
        let sqareArea = numberOne * numberOne
        console.log(`${sqareArea.toFixed(3)}`)
    }
    else if (shape === "rectangle"){
        let rectagnleArea = numberOne * numberTwo
        console.log(`${rectagnleArea.toFixed(3)}`)
    }
    else if (shape === "circle"){
        let circleArea = Math.pow(numberOne, 2) * Math.PI
        console.log(`${circleArea.toFixed(3)}`)
    }
    else if (shape === "triangle"){
        let triangleArea = (numberOne * numberTwo) / 2
        console.log(`${triangleArea.toFixed(3)}`)
    }
}