function task (passwordInput){
    var password = String(passwordInput)
    const strongPassword = "s3cr3t!P@ssw0rd"

    if (password === strongPassword) console.log("Welcome")
    else console.log("Wrong password!")
}