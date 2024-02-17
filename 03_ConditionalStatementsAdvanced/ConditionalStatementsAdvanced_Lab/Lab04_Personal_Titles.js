function task(ageInput, genderInput){
    var age = Number(ageInput)
    var gender = String(genderInput)
    if (gender === "m"){
        if (age >= 16) console.log("Mr.")
        else console.log("Master")
    }
    else if (gender === "f"){
        if (age < 16) console.log("Miss")
        else console.log("Ms.")
    }
}