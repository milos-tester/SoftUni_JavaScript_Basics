function calculate (nylon,paint,thinner,hours){
    let amountForNylon = (Number(nylon) + 2) * 1.50
    let amountForPaint = (Number(paint) * 1.10) * 14.50
    let amountForPaintThinner = Number(thinner) * 5.00
    let amountForBags = 0.40
    let material_price = amountForNylon + amountForPaint + amountForPaintThinner + amountForBags
    let craftsmen = (material_price* 0.30) * Number(hours)
    let total = material_price + craftsmen
    
    console.log(total)
}