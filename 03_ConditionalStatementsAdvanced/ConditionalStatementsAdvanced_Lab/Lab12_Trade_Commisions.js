function task (cityInput, salesInput){
    var city = String(cityInput)
    var sales = Number(salesInput)

    if (sales < 0) console.log("error")
    else{
    switch(city){
        case "London":
            if (sales >= 0 && sales <= 500) sales *= 0.05
            else if (sales > 500 && sales <= 1000) sales *= 0.07
            else if (sales > 1000 && sales <= 10000) sales *= 0.08
            else if (sales > 10000) sales *= 0.12
            console.log(sales.toFixed(2))
        break
        case "Rome":
            if (sales >= 0 && sales <= 500) sales *= 0.045
            else if (sales > 500 && sales <= 1000) sales *= 0.075
            else if (sales > 1000 && sales <= 10000) sales *= 0.10
            else if (sales > 10000) sales *= 0.13
            console.log(sales.toFixed(2))
        break
        case "Paris":
            if (sales >= 0 && sales <= 500) sales *= 0.055
            else if (sales > 500 && sales <= 1000) sales *= 0.08
            else if (sales > 1000 && sales <= 10000) sales *= 0.12
            else if (sales > 10000) sales *= 0.145
            console.log(sales.toFixed(2))
        break
        default:
            console.log("error")
        break
        }
    }
}