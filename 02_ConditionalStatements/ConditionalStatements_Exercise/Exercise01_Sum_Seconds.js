function task (secondsOneInput, secondsTwoInput, secondsThreeInput){
    var secondsOne = Number(secondsOneInput)
    var secondsTwo = Number(secondsTwoInput)
    var secondsThree = Number(secondsThreeInput)

    let sumSeconds = secondsOne + secondsTwo + secondsThree
    let minutes = Math.floor(sumSeconds / 60)
    let seconds = sumSeconds % 60

    if (seconds < 10) console.log(`${minutes}:0${seconds}`)
    else console.log(`${minutes}:${seconds}`)
}