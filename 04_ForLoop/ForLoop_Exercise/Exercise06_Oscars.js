function task(input){
    let actorName = String(input[0])
    let academyPoints = Number(input[1])
    let assessorsNumber = Number(input[2])
    let points = academyPoints
    let data = input
    for (let i = 3; i <= assessorsNumber * 2 + 2; i+=2){
        let assessorName = String(data[i])
        let assesorsPoints = (Number(data[i+1]) * assessorName.length) / 2
        points += assesorsPoints

        if (points > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`)
            break
        }
    }
    if (points <= 1250.5){
        console.log(`Sorry, ${actorName} you need ${(1250.5-points).toFixed(1)} more!`)
    }
}