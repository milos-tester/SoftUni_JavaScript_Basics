function task(pointsInput) {
    let points = Number(pointsInput);
    let bonus = 0.0;
    if (points <= 100) bonus += 5
    else if (points > 100 && points <= 1000) bonus = points * 0.2
    else bonus = points * 0.1
    
    if (points % 2 == 0) bonus += 1
    else if (points % 10 == 5) bonus += 2
    
    let totalPoints = points + bonus
    console.log(bonus);
    console.log(totalPoints);
}