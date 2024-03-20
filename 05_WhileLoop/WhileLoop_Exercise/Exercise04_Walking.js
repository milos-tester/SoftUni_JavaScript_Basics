function task(input){
    let goal = 10000
    let index = 0
    let checker = false

    while(true){
        let data = input[index]
        if (data === "Going home"){
            let last_steps = Number(input[index+1])
            goal -= last_steps
            break
        }
        goal -= Number(data)
        if (goal < 0) break

        index++
    }

    if (goal <= 0) console.log(`Goal reached! Good job!\n${Math.abs(goal)} steps over the goal!`)
    else console.log(`${goal} more steps to reach goal.`)
}