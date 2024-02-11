function task(metersInput){
    var meters = Number(metersInput)
    var price = 7.61 * meters
    var discount_price = price * 0.18
    var final_price = price - discount_price
    console.log(`The final price is: ${final_price} USD.\nThe discount is: ${discount_price} USD.`)
}