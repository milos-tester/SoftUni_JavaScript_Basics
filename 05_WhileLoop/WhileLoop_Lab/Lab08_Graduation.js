function task (input){
    let name = String(input[0])
    let average = 0
    let grade_counter = 0
    let bad_grade_counter = 0
    let index = 1

    while (true){
        grade_counter++
        let data = Number(input[index])
        if (data < 4.00) bad_grade_counter++
        else average += data

        if (bad_grade_counter > 1){
            console.log(`${name } has been excluded at ${grade_counter-1} grade`)
            break
        }
        if (grade_counter === 12) break
        index++
    }
    if (grade_counter === 12) console.log(`${name} graduated. Average grade: ${(average/12).toFixed(2)}`)
}