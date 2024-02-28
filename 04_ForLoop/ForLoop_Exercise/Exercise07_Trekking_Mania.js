function task(input){
    let group_number = Number(input[0])
    let group_makalu = 0
    let group_mont_blanc = 0
    let group_kilimanjaro = 0
    let group_k2 = 0
    let group_everest = 0
    let data = input
    let all_climbers = 0
    for (let i = 1; i <= group_number; i++){

        all_climbers += Number(data[i])

        if (Number(data[i]) <= 5) group_makalu += Number(data[i])
        else if (Number(data[i]) >= 6 && Number(data[i]) <= 12) group_mont_blanc += Number(data[i])
        else if (Number(data[i]) >= 13 && Number(data[i]) <= 25) group_kilimanjaro += Number(data[i])
        else if (Number(data[i]) >= 26 && Number(data[i]) <= 40) group_k2 += Number(data[i])
        else if (Number(data[i]) >= 41) group_everest += Number(data[i])
    }
    let result1 = group_makalu / all_climbers * 100
    let result2 = group_mont_blanc / all_climbers * 100
    let result3 = group_kilimanjaro / all_climbers * 100
    let result4 = group_k2 / all_climbers * 100
    let result5 = group_everest / all_climbers * 100
    console.log(`${result1.toFixed(2)}%\n${result2.toFixed(2)}%\n${result3.toFixed(2)}%\n${result4.toFixed(2)}%\n${result5.toFixed(2)}%`)
}