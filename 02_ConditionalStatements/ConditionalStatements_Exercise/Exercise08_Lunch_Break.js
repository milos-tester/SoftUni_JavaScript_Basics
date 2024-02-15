function solve(input) {

    nameE = String(input[0]);
    episodeD = Number(input[1]);
    breakeD = Number(input[2]);
  
    lunchTime = 1/8 * breakeD;
    relaxTime = 1/4 * breakeD;
    restTimeToWatchE = breakeD - lunchTime - relaxTime;
  
    missTime = episodeD - restTimeToWatchE;
  
    if(restTimeToWatchE >= episodeD) {
        console.log(`You have enough time to watch ${nameE} and left with ${Math.ceil(restTimeToWatchE - episodeD)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${nameE}, you need ${Math.ceil(missTime)} more minutes.`)
    }
  }