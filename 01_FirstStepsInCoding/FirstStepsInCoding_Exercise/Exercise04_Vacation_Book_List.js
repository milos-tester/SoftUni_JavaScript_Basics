function task(currentPagesInput, pagesPerHourInput, daysInput){
    var number_pages = Number(currentPagesInput)
    var pages_per_hour = Number(pagesPerHourInput)
    var number_of_days = Number(daysInput)
    let total_time = number_pages / pages_per_hour
    let result = total_time / number_of_days
    console.log(result)
}