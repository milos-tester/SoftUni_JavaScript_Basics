function taks(architect, projects){
    var architect_name = String(architect)
    var projects_number = Number(projects)
    var time_result = 3 * projects_number
    console.log(`The architect ${architect_name} will need ${time_result} hours to complete ${projects_number} project/s.`)
}