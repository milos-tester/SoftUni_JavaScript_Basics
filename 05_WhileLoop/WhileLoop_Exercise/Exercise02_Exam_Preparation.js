function task(input){
    let poor_grades = Number(input[0])
    let grades_counter = 0
    let index = 1
    let score = 0
    let problems = 0
    let last_problem = ""
    let checker = false

    while(true){
        let data_problem = String(input[index])
        let data_grade = Number(input[index+1])

        if (data_problem === "Enough"){
            checker = true
            break
        }
        if (data_grade <= 4) grades_counter++

        if (poor_grades === grades_counter){
            console.log(`You need a break, ${grades_counter} poor grades.`)
            break
        }
        problems++
        score += data_grade
        last_problem = data_problem
        index+=2

    }
    if (checker){
        console.log(`Average score: ${(score/problems).toFixed(2)}\nNumber of problems: ${problems}\nLast problem: ${last_problem}`)
    }
}