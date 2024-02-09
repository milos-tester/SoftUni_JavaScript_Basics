function solve(secondsInput, meterInput, secondsPerMeterInput){
    var seconds = Number(secondsInput)
    var meter = Number(meterInput)
    var secondsPerMeter = Number(secondsPerMeterInput)
    var swim_time = meter * secondsPerMeter
    var added_time = Math.floor(meter / 15) * 12.5
    var total_time = swim_time + added_time
    if (total_time >= seconds){
        console.log(`No, he failed! He was ${(total_time-seconds).toFixed(2)} seconds slower.`)
    }
    else{
        console.log(`Yes, he succeeded! The new world record is ${(total_time).toFixed(2)} seconds.`)
    }
}