function task(penPacketsInput, markerPacketsInput, boardCleanerLitersInput, discountPercentageInput){
    var pens_price = Number(penPacketsInput) * 5.80
    var marker_price = Number(markerPacketsInput) * 7.20
    var cleaner_price = Number(boardCleanerLitersInput) * 1.20
    let total_result = (pens_price + marker_price + cleaner_price) - (pens_price + marker_price + cleaner_price) * Number(discountPercentageInput)/100
    console.log(total_result)
}