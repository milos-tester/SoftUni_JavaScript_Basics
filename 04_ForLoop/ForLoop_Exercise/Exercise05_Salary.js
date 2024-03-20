function task(input){

    let n = Number(input[0])
    let salary = Number(input[1])
    let data = input
    for (let i = 2; i < input.length; i++){

        if (String(data[i]) === "Facebook") {
            salary -= 150;
        }
        else if (String(data[i]) === "Instagram") {
            salary -= 100;
        }
        else if (String(data[i]) === "Reddit") {
            salary -= 50;
        }

        if (salary <= 0){
            console.log("You have lost your salary.")
            break
        }
    }
    if (salary > 0) console.log(salary)
}