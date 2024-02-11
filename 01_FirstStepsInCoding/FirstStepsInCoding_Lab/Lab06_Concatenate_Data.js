function task(firstName, lastName, age, town){
    var first_name = String(firstName)
    var last_name = String(lastName)
    var age = Number(age)
    var town = String(town)
    console.log(`You are ${first_name} ${last_name}, a ${age}-years old person from ${town}.`)
}